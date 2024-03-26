"use strict";
const root = document.querySelector("#root");
const contentActors = document.querySelector('.contentActors')
const wrapperActors = document.querySelector('.wrapper')

function createElement(tag = "article", ...children) {
  const element = document.createElement(tag);
  element.append(...children);
  return element;
}

function createCard(actor) {
  const articleParent = document.createElement("article");
  articleParent.classList.add('blockActors')

  const actorImg  = document.createElement("img");
  articleParent.append(actorImg)
  actorImg.setAttribute("src", actor.profilePicture)
  actorImg.setAttribute("alt", "userphoto")
  actorImg.classList.add('actorPhoto')

  const actorNames = document.createElement("h2");
  articleParent.append(actorNames);
  actorNames.textContent = actor.firstName + " " + actor.lastName;

  const fbLink = document.createElement("a");
  articleParent.append(fbLink)
  fbLink.href = actor.contacts[0]
  const fbImg = document.createElement("img");
  fbLink.append(fbImg)
  fbImg.setAttribute("src", "./images/Facebook_f_logo_(2019).svg")
  fbImg.setAttribute("alt", "fblogo")
  fbImg.classList.add("fbicon")

  const twLink = document.createElement("a");
  articleParent.append(twLink)
  twLink.href = actor.contacts[1]
  const twImg = document.createElement("img");
  twLink.append(twImg)
  twImg.setAttribute("src", "./images/twitter.svg")
  twImg.setAttribute("alt", "fblogo")
  twImg.classList.add("fbicon")

  const instLink = document.createElement("a");
  articleParent.append(instLink)
  instLink.href = actor.contacts[2]
  const instImg = document.createElement("img");
  instLink.append(instImg)
  instImg.setAttribute("src", "./images/instagram-svgrepo-com.svg")
  instImg.setAttribute("alt", "fblogo")
  instImg.classList.add("fbicon")


  return articleParent;
}
 
 

fetch("./data.json")
  .then((response) => response.json())
  .then((actors) => {
    const cards = actors.map((actor) => createCard(actor));
    root.append(...cards);
  });

// .catch((error)=>{document.body.prepend(document.createTextNode());})

// function createCard (actor) {
//    return createElement('h2', document.createTextNode(actor.firstName + " " +actor.lastName));
// }

//document.querySelector(".actorName").textContent = "Jason";
//console.log(h2)

//  const h1 = createElement('h1', {classNames:['actorName']},
//     document.createTextNode(actor.name));
//     return createElement('h1')
