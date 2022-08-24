let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
    randomQuote();
  
  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.

  const newTitle = document.getElementById("main-title");
  newTitle.innerText = "DOM Toretto's homepage";

  // Part 2
  // Select the body and change the background-color to a new color of your choice.

  document.body.style.backgroundColor = 'salmon';

  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.

  let favThings = document.getElementById("favorite-things");
  favThings.removeChild(favThings.lastElementChild);
   
  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem. 
  // Remember you might have to iterate through the list of elements

  let titleFont = document.getElementsByClassName("special-title");
    for(let i=0; i<titleFont.length; i++){
      titleFont[i].style.fontSize = "2rem";
  }
 
  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  // 1. use getElementById to select the ul and save to a variable
  // 2. use querySelectorAll to select only the li's inside of the id'd ul
  // 3. loop over the resulting array and use an if statement to check whether the textContent is equal to 'Chicago'
  // 4. use removeChild to remove the li that says 'Chicago'
  // 5. ???
  // 6. Profit.
  let newRacesList = document.getElementById("past-races")
  let removeChicago = newRacesList.querySelectorAll("li");
    for(let i=0; i < removeChicago.length; i++){
      if(removeChicago[i].textContent === "Chicago"){        
         newRacesList.removeChild(removeChicago[i]);
      }
    }

  // Part 6
  // Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.

  let newCity = document.createElement("li");
  newCity.appendChild(document.createTextNode("Moscow"));
  newRacesList.appendChild(newCity);

  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.
  let main = document.getElementsByClassName("main");
  let newDivElement = document.createElement("div");
  newDivElement.classList.add("blog-post", "purple");
  let h2 = document.createElement("h2");
  let textNodeH2 = document.createTextNode("MOSCOW");
  h2.appendChild(textNodeH2);
  newDivElement.appendChild(h2);
  main[0].appendChild(newDivElement);
  let para = document.createElement("p");
  let textNodeP = document.createTextNode("I RACED WITH COPS, I WON)");
  para.appendChild(textNodeP);
  newDivElement.appendChild(para);
  
  // Part 8
  // When you reload the page, the script.js file loads a random DOM quote. Let's play with the included function:
  // const randomQuote = function() {
  //   document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  // };
  // Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.
  const changePhrase = document.querySelector("#quote-title");
  changePhrase.addEventListener("click", (event) => {
    randomQuote();
  });


  // Part 9
  // Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.

  // The mouseout handler should toggle the class .purple
  // The mouseenter handler should toggle the class .red (in HTML there no .red class...only .purple)

  let mouseOut = document.getElementsByClassName("blog-post", "purple");
    for(let i = 0; i<mouseOut.length; i++){
      mouseOut[i].addEventListener('mouseout', (event) => {
        console.log(mouseOut[i])}
      )
    };

    let mouseEnter = document.getElementsByClassName("blog-post", "purple");
    for(let j = 0; j<mouseOut.length; j++){
      mouseEnter[j].addEventListener('mouseenter', (event) => {
        console.log(mouseEnter[j])}
      )
    };
});
