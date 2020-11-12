import Link from "next/link";

export default function Nav(props) {
	return (
		<nav className="mb-8">
			<ul className="flex">
				<li className="mr-2">
					<Link href="/">
						<a className="text-blue-700 underline">Home</a>
					</Link>
				</li>
				<li className="mr-2">
					<Link href="/fonttest">
						<a className="text-blue-700 underline">Fonttest</a>
					</Link>
				</li>
				<li className="mr-2">
					<Link href="/about">
						<a className="text-blue-700 underline">About</a>
					</Link>
				</li>
				<li className="mr-2">
					<Link href="/blog">
						<a className="text-blue-700 underline">Blog</a>
					</Link>
				</li>
				<li className="mr-2">
					<Link href="/blog-1">
						<a className="text-blue-700 underline">Hacker article</a>
					</Link>
				</li>
				<li className="mr-2">
					<Link href="/blog/blog-2">
						<a className="text-blue-700 underline">article in /blog</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
