/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

// What is the difference between innerText with innerHTML
//

const p = document.querySelector("p");
p.innerHTML = p.innerText
  .split(" ")
  .map((word) =>
    word.length > 8
      ? `<span style="background-color:yellow;">${word}</span>`
      : word
  )
  .join(" ");

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/

const a = document.createElement("a");
a.href = "http://officeipsum.com/";
a.innerText = "Back to the source";
document.body.appendChild(a);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
p.innerHTML = p.innerHTML.split(".").join(".</p><p>") + "</p>";

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const wordCount = p.textContent.trim().split(" ").length;
const countDiv = document.createElement("div");
countDiv.innerText = `${wordCount} words`;
document.body.insertBefore(countDiv, p);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
p.innerHTML = p.innerHTML.replaceAll("?", "🤔").replaceAll("!", "😲");
