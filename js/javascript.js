import { dogArray } from "./data.js"



    // search page logic
const randomBreedEl = document.getElementById('randomBreedBtn')
const randomDogEl = document.getElementById('randomDogBtn')

const picklistEl = document.getElementById('picklist')
const dogBtn = document.getElementById('dogBtn')

const searchEl = document.getElementById('breedSearch')
const searchResultsEl = document.getElementById('searchResults')
const namedWelcomeEl = document.getElementById('named-welcome')


// navigation/journey
const letsGo = document.getElementById('lets-go')
const submitName = document.getElementById('submit-name')
const submitColour = document.getElementById('submit-colour')

const welcomeTab = document.querySelector('.welcome')
const nameTab = document.querySelector('.name')
const colourPicker = document.querySelector('.colour-picker')
const searchTab = document.querySelector('.search')

const imagesEl = document.querySelector('.images')
const nameValue = document.getElementById('name')
const colourPageEl = document.getElementById('colour-page')
const containerEl = document.querySelector('.container')
const colourPickerInput = document.getElementById('colour-picker-input')
const colourPickerInput2 = document.getElementById('colour-picker-input2')

const swirlEl = document.getElementById('swirl')

letsGo.addEventListener('click',() => {
    nameValue.value = ''
    welcomeTab.classList.toggle('active')
    nameTab.classList.toggle('active')
} )

submitName.addEventListener('click',() => {
    
    localStorage.setItem("Name", nameValue.value)
    let userName = localStorage.getItem("Name")
    namedWelcomeEl.innerHTML = `<p>Hi ${userName} welcome to the Doggy Image Generator! </p>
    
    <p>It looks a bit boring at the moment doesn't it? Let's make it a bit more colourful! </p>
    
    <p>Please pick your two favourite colours.</p>`
    
    nameTab.classList.toggle('active')
    colourPicker.classList.toggle('active')
})



submitColour.addEventListener('click',() => {
    colourPicker.classList.toggle('active')
    searchTab.classList.toggle('active')
} )

function imgsTransition() {
    searchTab.classList.toggle('active')
    imagesEl.classList.toggle('active')
}

colourPageEl.addEventListener('click', ()=>{
    console.log(colourPickerInput.value)
    containerEl.style.background = `linear-gradient(${colourPickerInput.value}, ${colourPickerInput2.value})`;
})

swirlEl.addEventListener('click', () => {
    let randomDegrees = Math.floor(Math.random() * 360 +1)
    containerEl.style.background = `linear-gradient(${randomDegrees}deg, ${colourPickerInput.value}, ${colourPickerInput2.value})`;
})

// API logic

dogBtn.addEventListener('click', fetchADog)


function fetchADog () {
let breedData = picklistEl.value
fetch (`https://dog.ceo/api/breed/${breedData}/images/random/3`)
.then (res => res.json())
.then (data => {
    
imagesEl.innerHTML =`
<img class="dog-pics" src="${data.message[0]}">
<img class="dog-pics"  src="${data.message[1]}">
<img class="dog-pics"  src="${data.message[2]}">`}
)

imgsTransition()
}

randomBreedEl.addEventListener('click', randomBreed)

function randomBreed() {
    let randomIndex = dogArray[Math.floor(Math.random () * dogArray.length)].apiSearchName
    let breedData = randomIndex
fetch (`https://dog.ceo/api/breed/${breedData}/images/random/3`)
.then (res => res.json())
.then (data => {
imagesEl.innerHTML =`
<img class="dog-pics" src="${data.message[0]}">
<img class="dog-pics"  src="${data.message[1]}">
<img class="dog-pics"  src="${data.message[2]}">
`}
)

imgsTransition()
}

randomDogEl.addEventListener('click', randomDog)

function randomDog() {
    fetch (`https://dog.ceo/api/breeds/image/random/3`)
.then (res => res.json())
.then (data => {
    
imagesEl.innerHTML =`
<img class="dog-pics" src="${data.message[0]}">
<img class="dog-pics"  src="${data.message[1]}">
<img class="dog-pics"  src="${data.message[2]}">
`}
)

imgsTransition()
}

searchEl.addEventListener('keyup', breedSearch)

function breedSearch(){
    searchResultsEl.innerHTML = ''
    const searchText = searchEl.value[0].toUpperCase() + searchEl.value.slice(1)
    const searchResult = dogArray.filter(dog => dog.actualName.includes(searchText)).slice(0,5).sort()
    
    
    for (let i = 0; i<searchResult.length; i++)
    {
        searchResultsEl.innerHTML +=`
        <a onClick="searchResultFetch('${searchResult[i].apiSearchName}')" href="">${searchResult[i].actualName}</a>
        ` 
    }
}

function searchResultFetch(breedData) {
    
    
fetch (`https://dog.ceo/api/breed/${breedData}/images/random/3`)
.then (res => res.json())
.then (data => {
    // data.message[0] ? imagesEl.innerHTML +=
    // `<img class="dog-pics" src="${data.message[0]}">` : `<img class="dog-pics" src="https://images.unsplash.com/photo-1423958950820-4f2f1f44e075?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170">` 
    // data.message[1] ? imagesEl.innerHTML +=
    // `<img class="dog-pics" src="${data.message[1]}">` : imagesEl.innerHTML += `<img class="dog-pics" src="https://images.unsplash.com/photo-1423958950820-4f2f1f44e075?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170">` 
    // data.message[2] ? imagesEl.innerHTML +=
    // `<img class="dog-pics" src="${data.message[2]}">` : imagesEl.innerHTML +=`<img class="dog-pics" src="https://images.unsplash.com/photo-1423958950820-4f2f1f44e075?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170">` 
    imagesEl.innerHTML =`
<img class="dog-pics" src="${data.message[0]}">
<img class="dog-pics"  src="${data.message[1]}">
<img class="dog-pics"  src="${data.message[2]}">
`}


)

imgsTransition()
}
    


   

