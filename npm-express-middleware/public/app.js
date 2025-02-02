const form = document.querySelector('form');
const url = 'http://localhost:3000/form';

async function makePostRequest(url, data) {
	try {
		const res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
			mode: 'cors', // *cors, no-cors, same-origin
		});

		return res.json();
	} catch (error) {
		console.log(error);
	}
}

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const forename = document.getElementById('forename').value;
	const surname = document.getElementById('surname').value;
	const data = { forename, surname };

	makePostRequest(url, data)
		.then(function (data) {
			console.log('Parsed data:', data);
		})
		.catch(function (err) {
			console.log(err);
		});
});
