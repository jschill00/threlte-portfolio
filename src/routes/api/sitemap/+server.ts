import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://www.jschillem.dev/</loc>
<lastmod>2023-08-31</lastmod>
</url>
</urlset>`,
		{
			headers: {
				'Content-Type': 'text/xml'
			}
		}
	);
};
