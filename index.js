const rand = (num) => {
	return Math.floor(Math.random() * num);
};

const sleep = (time) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, time);
	});
};

const selectAll = async (name) => {
	const DOM = document.querySelectorAll(name);
	if (DOM.length > 1) {
		return DOM;
	} else {
		await sleep(50 + rand(50));
		return selectAll(name);
	}
};

const select = async (name) => {
	const DOM = document.querySelector(name);
	if (DOM) {
		return DOM;
	} else {
		await sleep(50 + rand(50));
		return select(name);
	}
};
