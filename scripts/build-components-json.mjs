#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';

// CONFIG: source dir of markdown components and output path
const SRC_DIR = 'c:/Users/xxx/Downloads/Components/components';
const OUT_FILE = 'e:/windsurf proj/flowstacks/public/data/components.json';

const isMarkdown = (p) => p.toLowerCase().endsWith('.md');

function slugToName(slug) {
  return slug.replace(/[-_]+/g, ' ').replace(/\.[^.]+$/, '').trim();
}

function extractFirstCode(content, lang) {
  // Robust fence parser for blocks like:
  // ```lang\n...\n``` OR ``` lang ... inline```
  const lines = content.split(/\r?\n/);
  let inFence = false;
  let buf = [];
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();
    if (!inFence) {
      if (line.startsWith('```')) {
        const after = line.slice(3).trim();
        const token = (after.split(/[\t\x20]/)[0] || '').toLowerCase();
        const isJs = lang === 'js' && (token === 'js' || token === 'javascript');
        if (token === lang || isJs) {
          inFence = true;
          // capture inline content after language on same line
          const rest = after.slice((after.split(/[\t\x20]/)[0] || '').length).trimStart();
          if (rest) buf.push(rest);
        }
      }
    } else {
      if (line.startsWith('```')) {
        return buf.join('\n').trim();
      }
      buf.push(raw);
    }
  }
  return '';
}

function extractFirstParagraph(content) {
  const lines = content.split(/\r?\n/);
  const first = [];
  for (const l of lines) {
    const t = l.trim();
    if (!t) {
      if (first.length) break;
      else continue;
    }
    if (t.startsWith('#')) continue;
    first.push(t);
    if (first.join(' ').length > 120) break;
  }
  return first.join(' ');
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...await walk(p));
    else if (isMarkdown(p)) files.push(p);
  }
  return files;
}

async function ensureDir(p) {
  await fs.mkdir(path.dirname(p), { recursive: true });
}

async function main() {
  const mdFiles = await walk(SRC_DIR);
  const items = [];
  for (const file of mdFiles) {
    // Skip README files
    if (path.basename(file).toLowerCase() === 'readme.md') continue;
    const raw = await fs.readFile(file, 'utf8');
    const html = extractFirstCode(raw, 'html');
    const css = extractFirstCode(raw, 'css');
    const js = extractFirstCode(raw, 'js') || extractFirstCode(raw, 'javascript');
    // Heuristic: detect Tailwind usage by common utility class prefixes
    const looksTailwind = /class\s*=\s*(["'])(?:(?!\1).)*(?:bg-|text-|flex|grid|rounded|shadow|p-\d|px-|py-|m-\d|mx-|my-|w-\d|h-\d)/is.test(html || '');

    const rel = path.relative(SRC_DIR, file).replace(/\\/g, '/');
    const parts = rel.split('/');
    const filename = parts.pop();
    const category = parts[0] || 'misc';
    const subcategory = parts.slice(1).join('/') || '';

    items.push({
      id: rel,
      name: slugToName(filename),
      description: extractFirstParagraph(raw) || `Path: ${rel}`,
      category,
      subcategory,
      tags: [category, ...parts.slice(1)].filter(Boolean),
      path: rel,
      directory: parts.join('/'),
      source: 'local-md',
      html,
      css,
      js,
      tailwind: looksTailwind
    });
  }

  await ensureDir(OUT_FILE);
  await fs.writeFile(OUT_FILE, JSON.stringify({ generatedAt: new Date().toISOString(), count: items.length, items }, null, 2), 'utf8');
  console.log(`Wrote ${items.length} items to ${OUT_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
