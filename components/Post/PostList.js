// import MDX from "@mdx-js/runtime";
// import { Flex, Box, Heading, Text, Image } from "theme-ui";
// import Container from "../ui/Container";
// import DraftBadge from "../ui/DraftBadge";
import Link from "next/link";

const Posts = ({ posts, prevPosts, nextPosts }) => {
	// const isLocal = process.env.NODE_ENV === "development";
	return (
		<div>
			{posts &&
				posts
					// .filter((post) => {
					// 	return isLocal || !post.draft;
					// })
					.map((post) => (
						<>
							<Link href={"/" + post.slug} passHref>
								<a>{post.title}</a>
							</Link>

							{/* <MDX> */}
							{post.excerpt}
							{/* </MDX> */}
							<Link href={"/" + post.slug} passHref>
								<a>Read more...</a>
							</Link>
						</>
					))}
			<div class="flex">
				<div class="py-3">
					{prevPosts !== null && (
						<Link href={"/blog/" + prevPosts} passHref>
							<a>« see newer posts</a>
						</Link>
					)}
				</div>
				<div class="py-3">
					{nextPosts !== null && (
						<Link href={"/blog/" + nextPosts} passHref>
							<a>see older posts »</a>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
export default Posts;
