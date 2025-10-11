import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Keep clean URL /components but serve the static components.html with embed mode
  if (request.nextUrl.pathname === '/components') {
    const url = request.nextUrl.clone()
    url.pathname = '/components.html'
    url.searchParams.set('embed', '1')
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/components'],
}
