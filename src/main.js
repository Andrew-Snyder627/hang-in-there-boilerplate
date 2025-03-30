// query selector variables go here 👇
// Main Poster Page
var posterImage = document.querySelector('.poster-img') // poster image
var posterTitle = document.querySelector('.poster-title') // poster title
var posterQuote = document.querySelector('.poster-quote') // poster quote

// Poster Grids
var savedGrid = document.querySelector('.saved-posters-grid') //selects saved poster grid area
var unmotivationalPostersGrid = document.querySelector('.unmotivational-posters-grid') //selects unmotivational poster grid

// Buttons
var showRandomButton = document.querySelector('.show-random') // show another random poster button
var makePosterButton = document.querySelector('.show-form') //selecting the make your own poster button
var takeMeBackButton = document.querySelector('.show-main') // nevermind, take me back button
var showSavedButton = document.querySelector('.show-saved') //Show saved posters button
var backToMainButton = document.querySelector('.back-to-main') //back to main button
var showMyPosterButton = document.querySelector('.make-poster') //button to show created poster
var savePosterButton = document.querySelector('.save-poster') // button to save poster
var unmotivationalPosterButton = document.querySelector('.unmotivational-button') //Unmotivational posters button
var unmotivationalBackButton = document.querySelector('.back-to-main-unmotivated') //back to main from unmotivational

// Pages
var mainPage = document.querySelector('.main-poster') //selecting the mainPage
var formPage = document.querySelector('.poster-form') //selecting the formPage
var savedPage = document.querySelector('.saved-posters') //selecting the savedPage
var unmotivationalPage = document.querySelector('.unmotivational-poster') //selects unmotivationalPage

// Input Fields
var ownPosterImage = document.querySelector('#poster-image-url') // image url field to create new poster
var ownPosterTitle = document.querySelector('#poster-title') // poster title field to create new poster
var ownPosterQuote = document.querySelector('#poster-quote') // poster quote field to create new poster


// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

var unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];

var cleanedPosters = []

var savedPosters = [];

var currentPoster;

var hasCleanData = false; // Variable to track when cleanData has been used, I only want this to happen once from now on

// event listeners go here 👇
showRandomButton.addEventListener("click", changeContent) //eventListener to show another random poster

makePosterButton.addEventListener("click", function() { 
  showPage(formPage)
}) //eventListener to create form
takeMeBackButton.addEventListener("click", function() { 
  showPage(mainPage)
}) //eventListener to go back to main page
showSavedButton.addEventListener("click", function() { 
  showPage(savedPage)
  displaySavedPosters()
}) //eventListener to go to saved poster pages & display the posters in the grid
backToMainButton.addEventListener("click", function() { 
  showPage(mainPage)
}) //eventListener to go back to main
showMyPosterButton.addEventListener("click", createNewPoster) //eventListener to create a new poster from form

savePosterButton.addEventListener("click", saveCurrentPoster) //eventListener to save a poster

unmotivationalPosterButton.addEventListener("click", function () {
  showPage(unmotivationalPage); // show unmotivational page

  // Only call clean data if it hasn't been used before
  if (!hasCleanData) {
    cleanData(unmotivationalPosters); // clean data from unmotivationalPosters
    hasCleanData = true; // swaps hasCleanData to true, preventing cleanData from being called again.
  }

  displayUnmotivationalPosters(); // Display cleaned posters
 }); //eventListener to go to unmotivational poster page and generate unmotivational posters in the grid.

unmotivationalBackButton.addEventListener("click", function() {
  showPage(mainPage)
}) //eventListener to go back from unmotivational page

// Load event
window.addEventListener('load', changeContent); //eventListener on the browser window, fires when the entire page is loaded

//Target area for unmotivational poster grid

unmotivationalPostersGrid.addEventListener('dblclick', removePoster) //Event Listener to remove poster from grid

// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
// This function returns a random valid index from the given array
// Math.floor rounds it down to the nearest whole number

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

function changeContent() { //function to change the poster content

  currentPoster = createPoster(
    images[getRandomIndex(images)],
    titles[getRandomIndex(titles)],
    quotes[getRandomIndex(quotes)]
  );

  posterImage.src = currentPoster.imageURL;
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;
}

function showPage(pageToShow) {
  var allPages = [mainPage, formPage, savedPage, unmotivationalPage]

  for (var i = 0; i < allPages.length; i++) {
    allPages[i].classList.add('hidden')
  }

  pageToShow.classList.remove('hidden')
}

function createNewPoster(event) {
  event.preventDefault(); //Preventing default page refresh

  currentPoster = createPoster(
  ownPosterImage.value,
  ownPosterTitle.value,
  ownPosterQuote.value
  );

  //Save inputs into arrays
  images.push(currentPoster.imageURL);
  titles.push(currentPoster.title);
  quotes.push(currentPoster.quote);

  //Update DOM
  posterImage.src = currentPoster.imageURL;
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;

  // Swap back to main view
  formPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
}

function saveCurrentPoster() {
  // console.log(currentPoster)
  if (!savedPosters.some(isSamePoster)) { // iterator method to check each poster against method below, refactor with include
    savedPosters.push(currentPoster) // add to the array if above condition is met
  }
}

function isSamePoster(poster) { // Helper to check if poster already exists for function above
  return (
    poster.imageURL === currentPoster.imageURL &&
    poster.title === currentPoster.title &&
    poster.quote === currentPoster.quote
  );
}

function displaySavedPosters() {
  savedGrid.innerHTML = '' // Clear the existing grid, ran into trouble here

  for (var i = 0; i < savedPosters.length; i++) {
    var poster = savedPosters[i];

    savedGrid.innerHTML += `
    <div class="mini-poster">
      <img src="${poster.imageURL}" alt="Mini Poster Image">
      <h2>${poster.title}</h2>
      <h4>${poster.quote}</h4>
      </div>
    `
  }
}

function displayUnmotivationalPosters() {
  unmotivationalPostersGrid.innerHTML = '' //clear existing posters

  for (var i = 0; i < cleanedPosters.length; i++) {
    var poster = cleanedPosters[i]

    //create and append the mini-poster HTML
    unmotivationalPostersGrid.innerHTML += `
    <div class="mini-poster">
      <img src="${poster.imageURL}" alt="Unmotivational Poster Image">
      <h2>${poster.title}</h2>
      <h4>${poster.quote}</h4>
    </div>
    `
  }
}

function cleanData(data) {
  cleanedPosters = [] //clearing previous posters to prevent duplicate poster creation

  for (var i = 0; i < data.length; i++) {
    // Access each object in umotivationalPosters
    var unmotivationalPoster = data[i]
    // pull out the name, description, & image url
    //use these attributes to create a new unmotivational poster object
    var cleanedPoster = createPoster(
      unmotivationalPoster.img_url,
      unmotivationalPoster.name,
      unmotivationalPoster.description
    )
    
    cleanedPosters.push(cleanedPoster)
  }
}

function removePoster(event) {
  var posterToRemove = event.target.closest('.mini-poster')

  if (!posterToRemove) {
    console.log("No Poster Selected to Remove") // Can I just have return after this if statement? Log more for me, user would never see that
    return
  }
    // Remove poster from cleanedPosters array and redisplay updated posters
    removePosterFromArray(posterToRemove, cleanedPosters)
    displayUnmotivationalPosters() // Re render after deletion
  }

function removePosterFromArray(posterElement, posterArray) {
  var posterTitle = posterElement.querySelector('h2').innerText
  var posterQuote = posterElement.querySelector('h4').innerText
  var posterImage = posterElement.querySelector('img').src

  var relativeImagePath = './assets/' + posterImage.split('/assets/')[1]

  // new array without the poster that matches
  var updatedPosters = []
  // loop through and only add posters that don't match the clicked poster
  for (var i = 0; i < posterArray.length; i++) {
    var poster = posterArray[i]

    if (
      poster.imageURL !== relativeImagePath || // had to add this logic as .src was returning a different image path than expected. This should match correctly
      poster.title !== posterTitle ||
      poster.quote !== posterQuote
    ) {
      updatedPosters.push(poster)
    }
  }

  //update the cleanedPosters array with the new array
  cleanedPosters = updatedPosters;
}
