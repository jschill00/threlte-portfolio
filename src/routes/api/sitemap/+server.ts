import { json, type RequestHandler } from '@sveltejs/kit';
import { readdirSync } from 'fs';

export const GET: RequestHandler = () => {
	return json(readdirSync('./'));
};
