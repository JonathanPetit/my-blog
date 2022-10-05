import type { Post } from "@inc/type"

export const getMarkdown = async () => {
  const imports = await import.meta.glob('/posts/**/*.md', { eager: true })

  return imports
}

export const getPosts = (markdown: any) => {
  let posts: Post[] = []
  for(const md in markdown) {
    const post = markdown[md]
    posts.push({
      metadata: post.metadata,
      content: post.default
    })
  }

  return posts
}

export const getPost = (posts: Post[], id: string) => {
  const post: Post = posts.find(value => value.metadata.id === id)!

  return post
}