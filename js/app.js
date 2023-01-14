// document.addEventListener('DOMContentLoaded',() => {
//     console.log('yep!, it works');
// })  // dummy test


//DOM handling
// document.addEventListener('DOMContentLoaded', () =>{
//     const select = document.querySelector('#select');
//     select.addEventListener('submit', handleSelectChange);
// })



// //Functions

// const handleSelectChange = function (event) {
//     const resultParagraph = document.querySelector('#select-result');
//     resultParagraph.textContent = `You went with: ${event.target.value}.`;
// };


// ****1.Create a form in HTML with inputs for relevant data DONE
// 2.When the form is submitted, access the data from the form in the form's submit event object
// 3.Create a list in HTML
// 4.Append the submitted data to the list
// 5.Add a "Delete All" <button> which clears all of the list items from the list
// Note: If you are at all unclear about the process of reading and writing to the DOM, complete the MVP, writing all the code in one function. Understanding the document's methods is the main learning for this homework. Abstracting code into helper functions is secondary.

// const newListItem = document.createElement("li") // create a new item
//     newListItem.textContent = "Purple" // what the new element says
//     newListItem.classList.add('purple') // adding the css class to the new item
//     const list = document.querySelector("ul") // selecting the parent of the element, and capturing under a variable called 'list'
//     list.appendChild(newListItem) // appending the new child to the parent now callew 'list'
//     list.insertBefore(newListItem, redItem)