import { writable } from 'svelte/store';

import type { Post } from '@inc/type';

export const posts = writable([] as Post[])
