import { formidable } from 'formidable';

// custom middleware to handle multipart/form-data
export default function formidableMiddleware() {
	return function (req, res, next) {
		if (!/multipart\/form-data/.test(req.headers['content-type'])) {
			return next();
		}

		const form = formidable({
			keepExtensions: true,
			uploadDir: './uploads',
		});

		form.parse(req, function (err, fields, files) {
			if (err) {
				next(err);
			}

			req.body.fields = fields;
			req.body.files = files;
      console.log(req.body);
			res.json(req.body);
		});
	};
}
