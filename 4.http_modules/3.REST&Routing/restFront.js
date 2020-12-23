async function getUser() {
	try {
		const res = await axios.get('./users');
		const users = res.data;
		const list = document.querySelector('#list');
		list.innerHTML = ``;
		Object.keys(users).map(function (key) {
			const userDiv = document.createElement('div');
			const span = document.createElement('span');
			span.textContent = users[key];
			const edit = document.createElement('button');
			edit.textContent = '수정';
			edit.addEventListener('click', async () => {
				const name = prompt('To change');
				if (!name) {
					return alert('Should write name');
				}
				try {
					await axios.put('/user/' + key, { name });
					getUser();
				} catch (e) {
					console.error(e);
				}
			});
			const remove = document.createElement('button');
			remove.textContent = 'Delete';
			remove.addEventListener('click', async () => {
				try {
					await axios.delete('/user/' + key);
					getUser();
				} catch (e) {
					console.error(e);
				}
			});
			userDiv.appendChild(span);
			userDiv.appendChild(edit);
			userDiv.appendChild(remove);
			list.appendChild(userDiv);
			console.log(res.data);
		});
	} catch (e) {
		console.error(e);
	}
}

window.onload = getUser; //When loads your page
//When Submit
document.querySelector('#form').addEventListener('submit', async (e) => {
	e.preventDefault();
	const name = e.target.username.value;
	if (!name) {
		return alert('Write down your name');
	}
	try {
		await axios.post('/user', { name });
		getUser();
	} catch (e) {
		console.error(e);
	}
	e.target.username.value = '';
});
