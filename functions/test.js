exports.handler = async (event, context, callback) => {
	callback(null, {
		statusCode: 200,
		body: "We are now split testing!",
	});
};
