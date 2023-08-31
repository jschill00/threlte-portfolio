import { json, type RequestHandler } from '@sveltejs/kit';
import dirTree from 'directory-tree';

export const GET: RequestHandler = (event) => {
	const tree = dirTree('./');
	return json(tree);
};
