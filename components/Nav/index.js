import Link from "next/link";

export default function Nav(props) {
	return (
		<nav class="mb-8">
			<ul class="flex">
				<li class="mr-2">
					<Link href="/">
						<a class="text-blue-700 underline">Home</a>
					</Link>
        </li>
        <li class="mr-2">
					<Link href="/fonttest">
						<a class="text-blue-700 underline">Fonttest</a>
					</Link>
				</li>
				<li class="mr-2">
					<Link href="/about">
						<a class="text-blue-700 underline">About</a>
					</Link>
				</li>
				<li class="mr-2">
					<Link href="/blog">
						<a class="text-blue-700 underline">Blog</a>
					</Link>
				</li>
				<li class="mr-2">
					<Link href="/blog-1">
						<a class="text-blue-700 underline">Hacker article</a>
					</Link>
				</li>
				<li class="mr-2">
					<Link href="/blog/blog-2">
						<a class="text-blue-700 underline">article in /blog</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
