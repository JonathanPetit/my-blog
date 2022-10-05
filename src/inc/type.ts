export enum ButtonE {
  Link = "link",
  Button = "button"
}

export type Image = {
  alt: string
  src: string
}

export type PostMetadata = {
  id: string
  title: string
  date: Date
  resume: string
  tags: string[]
  img?: Image
}

export type Post = {
  metadata: PostMetadata
  content: any
}
