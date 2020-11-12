import Link from "next/link";
import FakeText from "../components/Post/FakeText";
import { getAllPosts } from "../api";
import config from "../blog.config";
import PostList from "../components/Post/PostList";

const Blog = (posts, prevPosts, nextPosts) => {
	// console.log("Blog - posts object: ", posts, prevPosts, nextPosts);
	return (
		<main>
			<h1 className="px-4 bg-yellow-200">Hello from Blog</h1>
			<Link href="/about">
				<a>About</a>
			</Link>
			<div>Blog page content goes here</div>
			{/* <FakeText title="SOme blog content etc" /> */}
			<PostList posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} />
		</main>
	);
};

export async function getStaticProps() {
	const posts = getAllPosts([
		"title",
		"publishedAt",
		"slug",
		// "author",
		// "coverImage",
		// "coverImageAlt",
		"summary",
		// "draft",
	]);
	// console.log("GAP = ", posts);
	// console.log("typeof posts = ", typeof posts);

	const startIndex = 0;
	const endIndex = config.postsPerPage;
	const prevPosts = null;
	const nextPosts = endIndex >= posts.length ? null : 2;
	return {
		props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
	};
}

export default Blog;
