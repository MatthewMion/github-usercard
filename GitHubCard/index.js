/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const { default: axios } = require("axios")
const entryPoint = document.querySelector('.cards')
console.log(entryPoint);
// const axios = require('axios');
const URL = 'https://api.github.com/users/MatthewMion'
// const resp = await axios.get('https://api.github.com/users/MatthewMion')
axios.get(URL)
  .then(response => {
    console.log(response)
    const card = cardMaker(response.data)
    entryPoint.appendChild(card)
  })
  .catch(err => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Please Try Again Later =(';
    document.body.appendChild(errorMessage);
    
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
// const cardDivs = .map(card => {
//   return cardMaker(card)
// })

// cardDivs.forEach(cardDiv =>{
//   entryPoint.appendChild(cardDiv)
// })
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['https://api.github.com/users/tetondan', 'https://api.github.com/users/dusstinmyers', 'https://api.github.com/users/justsml', 'https://api.github.com/users/luishrd', 'https://api.github.com/users/bigknell'];

// tetondan
// dustinmyers
// justsml
// luishrd
// bigknell

const cardDivs = followersArray.map(card => {
  return cardMaker(card)
})

cardDivs.forEach(cardDiv =>{
  entryPoint.appendChild(cardDiv)
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/



function cardMaker({name, login, location, avatar_url, html_url, followers, following, bio}){

  //create elements
  const cardDiv = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfoDiv = document.createElement('div')
  const cardName = document.createElement('h3');
  const cardUsername = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('p');
  const profileLink = document.createElement('a');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');

  //append
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(cardName);
  cardInfoDiv.appendChild(cardUsername);
  cardInfoDiv.appendChild(cardLocation);
  cardInfoDiv.appendChild(cardProfile);
  cardProfile.appendChild(profileLink);
  cardInfoDiv.appendChild(cardFollowers);
  cardInfoDiv.appendChild(cardFollowing);
  cardInfoDiv.appendChild(cardBio);

  //add classes
  cardDiv.classList.add('card');
  cardInfoDiv.classList.add('card-info');
  cardName.classList.add('name');
  cardUsername.classList.add('username');

  //add text content
  cardImg.textContent = avatar_url;
  cardName.textContent = name;
  cardUsername.textContent = login;
  cardLocation.textContent = `Location: ${location}`;
  cardProfile.textContent = `Profile: ${html_url}`;
  // profileLink.textContent = html_url;
  cardFollowers.textContent = `Followers: ${followers}`;
  cardFollowing.textContent = `Following: ${following}`;
  cardBio.textContent = `Bio: ${bio}`;

  return cardDiv;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
