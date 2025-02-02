import path from 'node:path';
import express from 'express';

const staticFilesPath = path.join(process.cwd(), 'public');
const serveStaticFilesMiddleware = express.static(staticFilesPath);
const bodyParserMiddleware = express.urlencoded({ extended: true });

const app = express();

app.use(bodyParserMiddleware);

app.use(serveStaticFilesMiddleware);

app.post('/form', (req, res) => {
	console.log(req.body);

	res.send('Data received successfully!');
});

app.listen(3000, () => {
	console.log('Server running on port 3000...');
});
