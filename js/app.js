document.addEventListener('DOMContentLoaded',() => {
    const textInput = document.querySelector('#input');
    textInput.addEventListener('input', handleInput);

    const select = document.querySelector('#select');
    select.addEventListener('change', handleSelectChange);

    const form = document.querySelector('#species_form');
    form.addEventListener('submit', handleFormSubmit)

    //delete all: has to go here because if it goes after the addChild, it doesn't let me delete until I add an item to the list
    const clearAll = document.querySelector('#button_delete');
    clearAll.addEventListener('click', function () {
        let listSpecies= document.querySelectorAll("#list li");
        listSpecies.forEach(function(item){
            item.remove();
        });
    });
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

// addChild to list ul
    const outputSpecies = document.querySelector('#input');
    const outputContinent = document.querySelector('#select');
    const list = document.querySelector('#list ul');
    const newItem = document.createElement('li');
    newItem.textContent = outputSpecies.value + " - " + outputContinent.value;
    list.appendChild(newItem);

}


