import { json, type RequestHandler } from '@sveltejs/kit';
import { readdirSync } from 'fs';
import dirTree from 'directory-tree';

export const GET: RequestHandler = () => {
	const directory = dirTree('./.svelte-kit/');

	return json(directory);
};
