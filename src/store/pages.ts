import { writable } from 'svelte/store';

import type { Page } from '@inc/type';

export const pages = writable([] as Page[])
