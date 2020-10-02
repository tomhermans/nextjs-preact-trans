import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		// console.log("initprops get");
		return { ...initialProps };
	}

	render() {
		return (
			<Html className="font-sans bg-black bg-base" data-theme="">
				<script>
					let LSTheme = localStorage.getItem('data-theme');
					{/* console.log('localstorage theme',LSTheme); */}
					document.documentElement.setAttribute('data-theme', LSTheme);
				</script>
				<script
					dangerouslySetInnerHTML={{
						__html: `<!-- oh, so you're a curious fellow, check my github or codepen -->`,
					}}
				/>

				<Head>
					<meta name="application-name" content="Tom Next PWA App" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta name="apple-mobile-web-app-title" content="Tom Next PWA App" />
					<meta
						name="description"
						content="Best Tom Next PWA App in the world"
					/>
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta
						name="msapplication-config"
						content="/static/icons/browserconfig.xml"
					/>
					<meta name="msapplication-TileColor" content="#e32127" />
					<meta name="msapplication-tap-highlight" content="no" />
					<meta name="theme-color" content="#000000" />
					<link
						rel="preload"
						as="font"
						type="font/woff2"
						crossorigin="anonymous"
						href="https://cms.jamstack.be/fonts/Lora-subset/lora-v14-latin-regular-subset.woff2"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/static/icons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/static/icons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/static/icons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/static/manifest.json" />
					<link
						rel="mask-icon"
						href="/static/icons/safari-pinned-tab.svg"
						color="#5bbad5"
					/>
					<link rel="shortcut icon" href="/static/icons/favicon.ico" />

					<meta name="twitter:card" content="summary" />
					<meta
						name="twitter:url"
						content="https://vibrant-benz-d6c5e1.netlify.app"
					/>
					<meta name="twitter:title" content="Tom Next PWA App" />
					<meta
						name="twitter:description"
						content="Best Tom Next PWA App in the world"
					/>
					<meta
						name="twitter:image"
						content="https://vibrant-benz-d6c5e1.netlify.app/static/icons/android-chrome-192x192.png"
					/>
					<meta name="twitter:creator" content="@DavidWShadow" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Tom Next PWA App" />
					<meta
						property="og:description"
						content="Best Tom Next PWA App in the world"
					/>
					<meta property="og:site_name" content="Tom Next PWA App" />
					<meta
						property="og:url"
						content="https://vibrant-benz-d6c5e1.netlify.app"
					/>
					<meta
						property="og:image"
						content="https://vibrant-benz-d6c5e1.netlify.app/static/icons/apple-touch-icon.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
