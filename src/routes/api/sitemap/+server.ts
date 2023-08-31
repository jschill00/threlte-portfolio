import { json, type RequestHandler } from '@sveltejs/kit';
import dirTree from 'directory-tree';

export const GET: RequestHandler = (event) => {
	const baseRoute = '/';
	const routes = [baseRoute];
	const tree = dirTree('./');

	return json(tree);
	// getEndpoints(tree, baseRoute, routes);

	// return new Response(getSitemapXML('https://www.jschillem.dev', routes), {
	// headers: {
	// 'Content-Type': 'text/xml'
	// }
	// });
};

function getSitemapXML(domain: string, routes: string[]) {
	let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
	sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
	routes.forEach((route) => {
		sitemap += getSitemapUrl(domain + route);
	});
	sitemap += '\n</urlset>';
	return sitemap;
}

function getSitemapUrl(location: string) {
	const date = new Date().toISOString().split('T')[0];
	const url = '<url>\n' + `<loc>${location}</loc>\n` + `<lastmod>${date}</lastmod>\n` + '</url>';
	return url;
}

function getEndpoints(tree: dirTree.DirectoryTree, route: string, routesArray: string[]) {
	tree.children!.forEach((child) => {
		if (child.children != undefined && child.children.length != 0) {
			const childRoute = route + child.name;
			if (child.children.some((e) => e.name === '+page.svelte')) {
				routesArray.push(childRoute);
			}
			getEndpoints(child, childRoute + '/', routesArray);
		}
	});
}
