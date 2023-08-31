/**
 * @format
 * @type {import('next').NextConfig}
 */

const springbootServerPort = 8081;

// configuration
const nextConfig = {
	reactStrictMode: false,
	async rewrites() {
		return [
			// {
			// 	source: '/api/oauth2/login/:path*',
			// 	destination: `http://127.0.0.1:${springbootServerPort}/oauth2/login/:path*`,
			// },
		];
	},
	async redirects() {
		return [
			// {
			// 	source: '/api/oauth2:provider',
			// 	destination: `http://localhost:${springbootServerPort}/oauth2/:provider`,
			// 	permanent: true,
			// },
		];
	},
};

module.exports = nextConfig;
