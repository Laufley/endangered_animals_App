document.addEventListener('DOMContentLoaded',() => {
    const textInput = document.querySelector('#input');
    textInput.addEventListener('input', handleInput);

    const select = document.querySelector('#select');
    select.addEventListener('change', handleSelectChange);

    const form = document.querySelector('#species_form');
    form.addEventListener('submit', handleFormSubmit)
})  


//  FUNCTIONS
const handleInput = function (event) {
    const output = document.querySelector('#input-result');
    output.textContent = `The species: ${event.target.value}`;
};

const handleSelectChange = function (event) {
    const resultParagraph = document.querySelector('#select-result');
    resultParagraph.textContent = `Lives in: "${event.target.value}".`;
}

const handleFormSubmit = function (event) {
    event.preventDefault();
    const resultParagraph = document.querySelector('#form-result');
    resultParagraph.textContent = `
    We are destroying the species:
    ${input.value};
    Which lives in:
    ${select.value}`
}




    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const speciesName = document.getElementById("input").value;
    //     const continent = document.getElementById("select").value;
        

        // const handleFormSubmit = function (event) {
        //     event.preventDefault();
        //     const resultParagraph = document.querySelector('#form-result');
        //     resultParagraph.textContent = `
        //       Your name:
        //       ${this.first_name.value}
        //       ${this.last_name.value}`


//     }
// }
// };

// const button

// const list = document.querySelector('ul');
// const newItem = document.createElement('li');
// newItem.textContent = handleInput.event.target.value + handleSelectChange.event.target.value;
// list.appendChild(newItem);

//Creating new item

    // const newListItem = document.createElement("li") // create a new item
    // newListItem.textContent = "test" // what the new element says
    // const list = document.querySelector("ul") // selecting the parent of the element, and capturing under a variable called 'list'
    // list.appendChild(newListItem) // appending the new child to the parent now callew 'list'


// ****1.Create a form in HTML with inputs for relevant data DONE
// ****2.When the form is submitted, access the data from the form in the form's submit event object
// ****3.Create a list in HTML
// 4.Append the submitted data to the list
// 5.Add a "Delete All" <button> which clears all of the list items from the list

