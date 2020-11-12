// import MDX from "@mdx-js/runtime";
// import { Flex, Box, Heading, Text, Image } from "theme-ui";
// import Container from "../ui/Container";
// import DraftBadge from "../ui/DraftBadge";
import Link from "next/link";

const PostList = ({ posts, prevPosts, nextPosts }) => {
	const isLocal = process.env.NODE_ENV === "development";
	// console.log("posts type = ", typeof posts);
	// console.log("postlist posts", posts);
	return (
		<div>
			{posts.posts &&
				posts.posts
					.filter((post) => {
						return isLocal || !post.draft;
					})
					.map((post) => (
						// console.log(typeof post),
						// console.log(post),
						<Link href={"/blog/" + post.slug} passHref>
							<a href="">
								<div className="mb-4" key={post.slug}>
									<div>
										<a className="no-underline">{post.title}</a>
									</div>
									<div>{post.excerpt}</div>
									<a href="" className="text-sm">
										Read more →
									</a>
								</div>
							</a>
						</Link>
					))}
			<div>
				<div>
					{posts.prevPosts !== null && (
						<Link href={"/blog/" + posts.prevPosts} passHref>
							<a>« see newer posts</a>
						</Link>
					)}
				</div>
				<div>
					{posts.nextPosts !== null && (
						<Link href={"/blog/" + posts.nextPosts} passHref>
							<a>see older posts »</a>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default PostList;

// const PostList = ({ posts, prevPosts, nextPosts }) => {
// 	const isLocal = process.env.NODE_ENV === "development";
// 	// console.log("Blgposts: ", posts);
// 	// console.log("posts type = ", typeof posts);

// 	return (
// 		<div>
// 			{
// 				(posts && console.table(Object.entries(posts)),
// 				Object.entries(posts)
// 					// .filter((post) => {
// 					// 	return isLocal || !post.draft;
// 					// })

// 					.map((post) => (
// 						// console.log(typeof post),
// 						<li>
// 							<Link href={"/" + post.slug} passHref>
// 								<a>{post.title}</a>
// 							</Link>

// 							{/* <MDX> */}
// 							{post.summary}
// 							{/* </MDX> */}
// 							<Link href={"/" + post.slug} passHref>
// 								<a>{post.slug} - Read more...</a>
// 							</Link>
// 						</li>
// 					)))
// 			}
// 			<div className="flex">
// 				<div className="py-3">
// 					{prevPosts !== null && (
// 						<Link href={"/blog/" + prevPosts} passHref>
// 							<a>« see newer posts</a>
// 						</Link>
// 					)}
// 				</div>
// 				<div className="py-3">
// 					{nextPosts !== null && (
// 						<Link href={"/blog/" + nextPosts} passHref>
// 							<a>see older posts »</a>
// 						</Link>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default PostList;
