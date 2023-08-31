import { json, type RequestHandler } from '@sveltejs/kit';
import { readdirSync } from 'fs';

export const GET: RequestHandler = () => {
	const directories = {
		dot: readdirSync('./'),
		back: readdirSync('../'),
		sveltekit: readdirSync('./.svelte-kit/')
	};
	return json(directories);
};
