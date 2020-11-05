// /pages/hello/[name].js
export default function handler(req, res) {
	const name = req.query.name || "there";
	return res.send(`Hello ${name}!`);
}
