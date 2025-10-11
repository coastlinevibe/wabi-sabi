declare module 'embla-carousel-react' {
  import type { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
  import type { MutableRefObject } from 'react'

  export type UseEmblaCarouselType = (
    options?: EmblaOptionsType,
    plugins?: EmblaPluginType[],
  ) => [MutableRefObject<HTMLDivElement | null>, any]

  export const useEmblaCarousel: UseEmblaCarouselType
}
