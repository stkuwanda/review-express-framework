import path from 'node:path';
import express from 'express';
import formidable from './formidable.js';

const staticFilesPath = path.join(process.cwd(), 'public');
const serveStaticFilesMiddleware = express.static(staticFilesPath);
const bodyParserMiddleware = express.urlencoded({ extended: true });
const jsonParserMiddleware = express.json();
const customFormidableMiddleware = formidable();

const app = express();

app.use(bodyParserMiddleware, jsonParserMiddleware, serveStaticFilesMiddleware, customFormidableMiddleware);

app.post('/form', (req, res) => {
	console.log(req.body);
	res.json(req.body);
});

app.listen(3000, () => {
	console.log('Server running on port 3000...');
});
