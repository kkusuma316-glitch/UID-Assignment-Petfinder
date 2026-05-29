// PET CARD CLICK EFFECT

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('click', () => {

        alert(card.innerText + " Section Opened!");

    });

});

// SEARCH BUTTON

document.querySelector('.search-btn')
.addEventListener('click', () => {

    const pet =
    document.querySelector('.search-box input').value;

    if(pet === ''){
        alert("Please enter pet name");
    }
    else{
        alert("Searching for " + pet);
    }

});

// BUTTONS

document.querySelectorAll('.learn-btn')
.forEach(btn => {

    btn.addEventListener('click', () => {

        alert("Opening Article...");

    });

});

document.querySelectorAll('.read-btn')
.forEach(btn => {

    btn.addEventListener('click', () => {

        alert("Reading More...");

    });

});
// SMALL ARTICLE CARDS

document.querySelectorAll('.small-card')
.forEach(card => {

    card.addEventListener('click', () => {

        alert("Opening Dog Adoption Article...");

    });

});

const findPet =
document.getElementById('findPet');

const findPetDropdown =
document.getElementById('findPetDropdown');

// OPEN DROPDOWN

findPet.addEventListener('click', (e) => {

    e.preventDefault();

    if(
        findPetDropdown.style.display === 'block'
    ){

        findPetDropdown.style.display = 'none';

    }

    else{

        findPetDropdown.style.display = 'block';

    }

});

// SELECT OPTION

document.querySelectorAll('.find-option')
.forEach(option => {

    option.addEventListener('click', () => {

        findPet.innerHTML =
        option.innerText +
        ' <i class=\"fa-solid fa-angle-down\"></i>';

        findPetDropdown.style.display =
        'none';

    });

});

// CLOSE WHEN CLICK OUTSIDE

document.addEventListener('click', (e) => {

    if(
        !findPetDropdown.contains(e.target) &&
        e.target !== findPet
    ){

        findPetDropdown.style.display =
        'none';

    }

});
const allPetsBtn =
document.getElementById('allPetsBtn');

const petsDropdown =
document.getElementById('petsDropdown');

// OPEN DROPDOWN

allPetsBtn.addEventListener('click', (e) => {

    e.preventDefault();

    if(
        petsDropdown.style.display === 'block'
    ){

        petsDropdown.style.display = 'none';

    }

    else{

        petsDropdown.style.display = 'block';

    }

});

// CLOSE DROPDOWN

document.addEventListener('click', (e) => {

    if(
        !petsDropdown.contains(e.target) &&
        e.target !== allPetsBtn
    ){

        petsDropdown.style.display = 'none';

    }

});
// SEARCH BAR WORKING

document.querySelector('.search-btn')
.addEventListener('click', () => {

    const searchValue =
    document.querySelector('.search-box input')
    .value
    .toLowerCase();

    // DOGS

    if(
        searchValue.includes('dog') ||
        searchValue.includes('puppy') ||
        searchValue.includes('terrier') ||
        searchValue.includes('husky') ||
        searchValue.includes('labrador')
    ){

        window.location.href =
        "dogs.html";

    }

    // CATS

    else if(
        searchValue.includes('cat') ||
        searchValue.includes('kitten') ||
        searchValue.includes('persian')
    ){

        window.location.href =
        "cats.html";

    }

    // OTHER ANIMALS

    else if(
        searchValue.includes('rabbit') ||
        searchValue.includes('bird') ||
        searchValue.includes('horse') ||
        searchValue.includes('guinea')
    ){

        window.location.href =
        "other-animals.html";

    }

    // SHELTERS

    else if(
        searchValue.includes('shelter') ||
        searchValue.includes('rescue') ||
        searchValue.includes('adoption center')
    ){

        window.location.href =
        "shelters.html";

    }

    // EMPTY / INVALID

    else{

        alert("Please search for dogs, cats, shelters or other animals");

    }

});
// SIGN IN SIDEBAR

const signBtn =
document.querySelector('.sign-btn');

const signinOverlay =
document.getElementById('signinOverlay');

const closeSignin =
document.getElementById('closeSignin');

// OPEN

signBtn.addEventListener('click', () => {

signinOverlay.style.display = 'flex';

});

// CLOSE BUTTON

closeSignin.addEventListener('click', () => {

signinOverlay.style.display = 'none';

});

// CLOSE OUTSIDE

signinOverlay.addEventListener('click', (e) => {

if(e.target === signinOverlay){

signinOverlay.style.display = 'none';

}

});
// SEARCH BAR WORKING

const searchBtn =
document.querySelector('.search-btn');

const searchInput =
document.getElementById('searchInput');

// BUTTON CLICK

searchBtn.addEventListener('click', () => {

const value =
searchInput.value.toLowerCase();

// DOGS

if(
value.includes('dog') ||
value.includes('puppies') ||
value.includes('large dogs') ||
value.includes('small dogs')
){

window.location.href =
'dogs.html';

}

// CATS

else if(
value.includes('cat') ||
value.includes('kittens')
){

window.location.href =
'cats.html';

}

// OTHER PETS

else if(
value.includes('other')
){

window.location.href =
'other-animals.html';

}

// INVALID

else{

alert('Select a valid option');

}

});
// FIND A PET DROPDOWN LINKS

const findOptions =
document.querySelectorAll('.find-option');

// DOGS

findOptions[0].addEventListener('click', () => {

window.location.href =
'dogs.html';

});

// CATS

findOptions[1].addEventListener('click', () => {

window.location.href =
'cats.html';

});

// OTHER ANIMALS

findOptions[2].addEventListener('click', () => {

window.location.href =
'other-animals.html';

});