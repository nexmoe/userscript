/**
 * Generates a random number between 0 (inclusive) and the given maximum value (exclusive).
 *
 * @param {number} num - The maximum value for the random number generation.
 * @return {number} A random number between 0 and the given maximum value.
 */
const rand = (num) => {
	return Math.floor(Math.random() * num);
};

/**
 * Sleeps for a specified amount of time.
 *
 * @param {number} time - The amount of time to sleep in milliseconds.
 * @return {Promise<void>} A promise that resolves after the specified time has elapsed.
 */
const sleep = (time) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, time);
	});
};

/**
 * Selects all elements in the DOM that match the given selector.
 *
 * @param {string} name - The selector to match the elements.
 * @return {NodeList} - A list of DOM elements.
 */
const selectAll = async (name) => {
	const DOM = document.querySelectorAll(name);
	if (DOM.length > 1) {
		return DOM;
	} else {
		await sleep(50 + rand(50));
		return selectAll(name);
	}
};

/**
 * Selects an element from the DOM based on the given name.
 *
 * @param {string} name - The name of the element to be selected.
 * @return {Promise<Element>} The selected DOM element.
 */
const select = async (name) => {
	const DOM = document.querySelector(name);
	if (DOM) {
		return DOM;
	} else {
		await sleep(50 + rand(50));
		return select(name);
	}
};

/**
 * Creates a notification message element and appends it to the document body.
 *
 * @param {string} message - The message to be displayed in the notification.
 * @return {undefined} This function does not return a value.
 */
const notification = (message) => {
	const shadowRoot = document.createElement("div").attachShadow({ mode: "open" });
  
	const notification = document.createElement("div");
	notification.style.fontSize = "17px";
	notification.style.position = "fixed";
	notification.style.boxShadow = "0px 4px 7px rgb(255 0 0 / 37%)";
	notification.style.bottom = "20px";
	notification.style.right = "20px";
	notification.style.backgroundColor = "red";
	notification.style.color = "white";
	notification.style.padding = "12px 16px";
	notification.style.borderRadius = "7px";
	notification.style.zIndex = "9999";
	notification.innerText = message;
  
	shadowRoot.appendChild(notification);
	document.body.appendChild(shadowRoot);
  
	setTimeout(() => {
	  shadowRoot.remove();
	}, 3000);
  };