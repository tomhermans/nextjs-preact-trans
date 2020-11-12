const PostCard = ({ post }) => {
	return (
		<div className="postcard">
			<h3>post title = {post.title}</h3>
			<p>
				<h3>post date = {post.publishedAt} /publishedat</h3>
			</p>
			<p>summary = {post.summary} /summary</p>
			<p>Image= {post.image} /image</p>
		</div>
	);
};

export default PostCard;
