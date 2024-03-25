'use strict';

const root = document.querySelector('#root');
function createElement(tag='article', ...children){
    const element = document.createElement(tag);
    element.append(...children);
    return element;
}

function createCard (card) {
 const articleParent = document.createElement('article');
 articleParent.append(document.createTextNode(card.firstName + " " +card.lastName));
 return articleParent;
 }
 
 fetch('./data.json')
 .then((response)=> response.json())   
 .then((actors)=>{
    const cards = actors.map((actor)=>createCard(actor));
    root.append(...cards);
 })
// .catch((error)=>{document.body.prepend(document.createTextNode());})



// function createCard (actor) {
//    return createElement('h2', document.createTextNode(actor.firstName + " " +actor.lastName));
// }



//document.querySelector(".actorName").textContent = "Jason";
//console.log(h2)


//  const h1 = createElement('h1', {classNames:['actorName']},
//     document.createTextNode(actor.name));
//     return createElement('h1')


