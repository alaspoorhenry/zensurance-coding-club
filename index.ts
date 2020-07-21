// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML += `<h4>Coding Club 2020-07-20 🎉🎉</h4>`;
appDiv.innerHTML += `<h3>Question: <br/><br/>Write a function that converts an object into an array of keys and values.</b></h3>`;

/**
 * @param obj
 */

// Implement your logic here:
function objectToArray(obj) {
	return Object.entries(obj);
}

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// })
