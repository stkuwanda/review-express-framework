import express from 'express';

const app = express();

app.get('/next-error', (req, res, next) => {
	next(new Error('Ohh! Something went wrong'));
});

app.get('/throw-error', (req, res) => {
	throw new Error('Ohh! Something went wrong');
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Ohh! The Server needs some love');
});

app.listen(3000, () => {
	console.log(`running at http://localhost:3000`);
});
