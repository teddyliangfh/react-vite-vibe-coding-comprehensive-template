export interface Resource {
  id: number
  title: string
  description: string
  content: string
  author: string
  publishedDate: string
  tags: string[]
}

export interface ResourceListItem {
  id: number
  title: string
  description: string
}
