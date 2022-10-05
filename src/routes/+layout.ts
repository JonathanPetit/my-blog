import type { Page, Post } from "@inc/type";
import { getPostsMarkdown, getPosts } from "@utils/posts";
import { getPagesMarkdown, getPages } from "@utils/pages";
import { posts } from '@store/posts';
import { pages } from "@store/pages";


export const load = async () => {
  let postsStored: Post[] = []
  posts.subscribe(value => {
		postsStored = value;
	});

  if(Object.keys(postsStored).length === 0) {
    const imports = await getPostsMarkdown()
    posts.set(getPosts(imports))
  }

  let pagesStored: Page[] = []
  pages.subscribe(value => {
		pagesStored = value;
	});

  if(Object.keys(pagesStored).length === 0) {
    const imports = await getPagesMarkdown()
    pages.set(getPages(imports))
  }

  return { postsStored, pagesStored }
}