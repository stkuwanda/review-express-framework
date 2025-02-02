import path from 'node:path';
import express from 'express';

const staticFilesPath = path.join(process.cwd(), 'public');
const serveStaticFilesMiddleware = express.static(staticFilesPath);
const bodyParserMiddleware = express.urlencoded({ extended: true });
const jsonParserMiddleware = express.json();

const app = express();

app.use(bodyParserMiddleware, jsonParserMiddleware, serveStaticFilesMiddleware);

app.post('/form', (req, res) => {
	console.log(req.body);
	res.json(req.body);
});

app.listen(3000, () => {
	console.log('Server running on port 3000...');
});
