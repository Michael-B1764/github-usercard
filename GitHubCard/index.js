

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

//this is on line 57

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
  let cardInfo = document.createElement('div');
  let cardProfileImg = document.createElement('img');
  let cardName = document.createElement('h3');
  let cardUsername = document.createElement('p');
  let cardLocation = document.createElement('p');
  let cardProfileLinkContainer = document.createElement('p');
  let cardProfileLink = document.createElement('a');
  let cardFollowers = document.createElement('p');
  let cardFollowing = document.createElement('p');
  let cardBio = document.createElement('p');
  //setup structure
  cards.append(card);
  card.append(cardProfileImg, cardInfo);
  cardInfo.append(cardName, cardUsername, cardLocation);
  cardInfo.append (cardProfileLinkContainer, cardFollowers, cardFollowing, cardBio);
  cardProfileLinkContainer.append(cardProfileLink);
  //set classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardUsername.classList.add('username');
  //add information
  cardProfileImg.src = (obj["avatar_url"]);
  cardName.innerHTML = (obj.name);
  cardUsername.innerHTML = (obj.login);
  cardLocation.innerHTML = (`Location: ${obj.location}`);
  cardProfileLink.href = (obj['html_url']);
  cardProfileLink.innerHTML = (obj['html_url']);
  cardFollowers.innerHTML = (`Followers: ${obj.followers}`);
  cardFollowing.innerHTML = (`Following: ${obj.following}`);
  cardBio.innerHTML = (`Bio: ${obj.bio}`);

}

// axios.get('https://api.github.com/users/Michael-B1764')
//   .then( response => {
//     console.log(response);
//     createCard(response.data);
//   })
//   .catch( err => {
//     console.log(err);
//   })


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/




axios.get('https://api.github.com/users/Michael-B1764')
    .then( response => {
      console.log(response);
      createCard(response.data);
    })
    .catch( err => {
      console.log(err);
    })


axios.get('https://api.github.com/users/Michael-B1764/followers')
    .then(response => {
      const followersArray = [];
      const followerLinkArray = [];
      response.data.forEach(user => {
        followersArray.push(user.login);
      })
      console.log(followersArray);
      followersArray.forEach(item => {
        followerLinkArray.push(`https://api.github.com/users/${item}`);
      });
      followerLinkArray.forEach(link => {
        axios.get(link)
        .then( response => {
          console.log(response);
          createCard(response.data);
        })
        .catch( err => {
          console.log(err);
        })
      })
      })
      .catch(error => {
        console.log(error);
      })





// followersArray.forEach(item => {
  // axios.get(item)
  //   .then( response => {
  //     console.log(response);
  //     createCard(response.data);
  //   })
  //   .catch( err => {
  //     console.log(err);
  //   })
// })


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

/*
get a profile from github
make a card for that profile
use the followers url to generate a list of followers


GENERATE MY CARD
axios.get('https://api.github.com/users/Michael-B1764')
.then( response => {
  console.log(response);
  createCard(response.data);
})
.catch( err => {
  console.log(err);
})

GENERATE FOLLOWER ARRAY
axios.get('https://api.github.com/users/Michael-B1764/followers')
.then(response => {
  response.data.forEach(user => {
    followersArray.push(user.login);
  })
  console.log(followersArray);
  console.log(response.data);
})
.catch(error => {
  console.log(error);
})

GENERATE USER CARD FROM FOLLOWER ARRAY
forEach(follower => {
  axios.get('https://api.github.com/users/${usersProfileName}')
  .then( response => {
    console.log(response);
    createCard(response.data);
  })
  .catch( err => {
    console.log(err);
  })
})

GENERATE AN ARRAY OF FUNCTIONS FROM AN ARRAY OF NAMES 
FUNCTION CONTAINS

function `${followersArray[i]}`() {
  return axios.get('https://api.github.com/users/${followersArray[i]}');
}





*/