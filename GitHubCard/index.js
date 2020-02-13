//object structure for my profile

  let testData = {
    data: {
      profileImg: "https://avatars3.githubusercontent.com/u/58165510?v=4",
      name: "Michael Bailar",
      login: "Michael-B1764" ,
      location: "Seattle",
      html_url: "https://github.com/Michael-B1764",
      followers: 5,
      following: 0,
      bio: "test"
    }
  }




/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/Michael-B1764')
//     .then( response => {
//         console.log(response);
//     })
//     .catch( err => {
//         console.log(err);
//     })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const createCard = (obj) => {
  //declare vars
  let cards = document.querySelector('.cards');
  let card = document.createElement('div');
  let cardProfileImg = document.createElement('img');
  let cardName = document.createElement('p');
  let cardUsername = document.createElement('p');
  let cardLocation = document.createElement('p');
  let cardProfileLink = document.createElement('a');
  let cardFollowers = document.createElement('p');
  let cardFollowing = document.createElement('p');
  let cardBio = document.createElement('p');
  //setup structure
  cards.append(card);
  card.append(cardProfileImg, cardName, cardUsername, cardLocation);
  card.append (cardProfileLink, cardFollowers, cardFollowing, cardBio);
  //set classes
  card.classList.add('card');
  cardName.classList.add('name');
  cardUsername.classList.add('username');
  //add information
  cardProfileImg.src = (obj.data.profileImg);
  cardName.innerHTML = (obj.data.name);
  cardUsername.innerHTML = (obj.data.login);
  cardLocation.innerHTML = (obj.data.location);
  cardProfileLink.href = (obj.data['html_url']);
  cardProfileLink.innerHTML = (obj.data['html_url']);
  cardFollowers.innerHTML = (obj.data.followers);
  cardFollowing.innerHTML = (obj.data.following);
  cardBio.innerHTML = (obj.data.bio);

}


createCard(testData);
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
