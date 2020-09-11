import Link from "next/link";
import FakeText from "../components/Post/FakeText";
import { getAllPosts } from "../api";
import config from "../blog.config";
import PostList from "../components/Post/PostList";

const Blog = (props, posts, prevPosts, nextPosts) => {
	console.log("posts object: ", posts);
	return (
		<main>
			<h1 class="bg-orange-400 px-4">Hello from Blog</h1>
			<Link href="/about">
				<a>About</a>
			</Link>
			<div>Blog page content goes here</div>
			<FakeText title="SOme blog content etc" />
			{/* <PostList posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} /> */}
		</main>
	);
};

export async function getStaticProps() {
	const posts = getAllPosts([
		"title",
		"date",
		"slug",
		"author",
		"coverImage",
		"coverImageAlt",
		"excerpt",
		"draft",
	]);
	// console.log(posts);

	const startIndex = 0;
	const endIndex = config.postsPerPage;
	const prevPosts = null;
	const nextPosts = endIndex >= posts.length ? null : 2;
	return {
		props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
	};
}

export default Blog;
