declare const __PATH_PREFIX__: string
export interface Fields {
  date: string
  dateStr?: string
  slug: string
  beforeGatsby: boolean
}

export interface Frontmatter {
  title: string
  description: string
  seriesId?: string
  videoId?: string
  tags?: string[]
  featured_image?: string
  permalink?: string
  category?: string
}
