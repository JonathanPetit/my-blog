import { getMarkdown, getPosts } from "@utils/posts";
import { posts } from '@store/posts';
import type { Post } from "@inc/type";

export const load = async () => {
  let postsStored: Post[] = []
  posts.subscribe(value => {
		postsStored = value;
	});

  if(Object.keys(postsStored).length === 0) {
    const imports = await getMarkdown()
    posts.set(getPosts(imports))
  }

  return { postsStored }
}