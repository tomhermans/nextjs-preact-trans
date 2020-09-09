const isProd = process.env.NODE_ENV === "production";

const path = require("path");
const withPWA = require("next-pwa");
const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});
const withPrefresh = require("@prefresh/next");

const config = {
	// MDX
	pageExtensions: ["js", "jsx", "md", "mdx"],

	//PWA
	pwa: {
		register: true,
		disable: !isProd,
		dest: "public",
	},
	// experimental: {
	// 	modern: true,
	// 	polyfillsOptimization: true,
	// },
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	webpack(config, { dev, isServer }) {
		const splitChunks = config.optimization && config.optimization.splitChunks;
		if (splitChunks) {
			const cacheGroups = splitChunks.cacheGroups;
			const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
			if (cacheGroups.framework) {
				cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
					test: preactModules,
				});
				cacheGroups.commons.name = "framework";
			} else {
				cacheGroups.preact = {
					name: "commons",
					chunks: "all",
					test: preactModules,
				};
			}
		}

		// Install webpack aliases:
		const aliases = config.resolve.alias || (config.resolve.alias = {});
		aliases.react = aliases["react-dom"] = "preact/compat";

		// inject Preact DevTools
		if (dev && !isServer) {
			const entry = config.entry;
			config.entry = () =>
				entry().then((entries) => {
					entries["main.js"] = ["preact/debug"].concat(
						entries["main.js"] || []
					);
					return entries;
				});
		}
		console.log("is Prod:", isProd);
		return config;
	},
};

// withMDX
// const MDXConfig = withMDX({
// 	//https://github.com/tomhermans/nextjs-mdx-blog-starter/blob/preact-test/next.config.js
// 	pageExtensions: ["js", "jsx", "md", "mdx"],
// 	webpack: (config, { isServer }) => {
// 		// Fixes npm packages (mdx) that depend on `fs` module
// 		if (!isServer) {
// 			config.node = {
// 				fs: "empty",
// 			};
// 		}
// 		return config;
// 	},
// });

module.exports = withPWA(withMDX(withPrefresh(config)));
