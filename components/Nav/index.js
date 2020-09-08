import Link from "next/link";

export default function Nav(props) {
	return (
		<nav class="mb-8">
			<ul class="flex">
				<li class="mr-2">
					<Link href="/">
						<a class="text-blue-500 underline">Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a class="text-blue-500 underline">About</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
