export enum ButtonE {
  Link = "link",
  Button = "button"
}

export type Link = {
  url: string,
  target: string
}

export type Icon = {
  name: string
  link?: Link,
  width?: string
  height?: string,
  viewBox?: string,
  fill?: string
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

export type Page = {
  id: string
  content: any
}