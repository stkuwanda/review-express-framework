import path from 'node:path';
import express from 'express';

const staticFilesPath = path.join(process.cwd(), 'public');
const serveStaticFilesMiddleware = express.static(staticFilesPath);

const app = express();

app.use(serveStaticFilesMiddleware);

app.listen(3000, () => {
  console.log('Server running on port 3000...')
});