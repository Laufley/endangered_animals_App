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
    We are losing the
    ${input.value}
    from
    ${select.value}!!`

    const outputSpecies = document.querySelector('#input');
    const outputContinent = document.querySelector('#select');
    const list = document.querySelector('#list ul');
    const newItem = document.createElement('li');
    newItem.textContent = outputSpecies.value + " - " + outputContinent.value;
    list.appendChild(newItem);

}


// ****1.Create a form in HTML with inputs for relevant data DONE
// ****2.When the form is submitted, access the data from the form in the form's submit event object
// ****3.Create a list in HTML
// ****4.Append the submitted data to the list
// 5.Add a "Delete All" <button> which clears all of the list items from the list

