document.addEventListener("DOMContentLoaded", ()=>{
    //animals comes from global variable loaded in previous script data.js
    //animalSelect comes from the html document we waited to load above with DOMContentLoaded
    animals.forEach(a => animalSelect.appendChild(new Option(a)));
});
