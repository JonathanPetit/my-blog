import type { Page } from "@inc/type"

export const getPagesMarkdown = async () => {
  const imports = await import.meta.glob('/content/pages/**/*.md', { eager: true })

  return imports
}

export const getPages = (markdown: any) => {
  let pages: Page[] = []
  for(const md in markdown) {
    const page = markdown[md]
    pages.push({
      id: page.metadata.id,
      content: page.default
    })
  }

  return pages
}

export const getPage = (pages: Page[], id: string) => {
  const page: Page = pages.find(value => value.id === id)!

  return page
}
