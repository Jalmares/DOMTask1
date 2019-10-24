// Put code of task C here
'use strict';

const main = document.getElementsByTagName("main")[0];

const newArticle = document.createElement("article");
const header = document.createElement("header");
const h2 = document.createElement("h2");
const figure = document.createElement("figure");
const img = document.createElement("img");
const figcaption = document.createElement("figcaption");
const p = document.createElement("p");

h2.innerText = "Article header";
img.src = "http://placekitten.com/320/160";
img.alt = "title";
figcaption.innerText = "Caption";
p.innerText = "Here is some text. Here is some text. Here is some text. Here is some text.";

header.appendChild(h2);
figure.appendChild(img);
figure.appendChild(figcaption);
newArticle.appendChild(header);
newArticle.appendChild(figure);
newArticle.appendChild(p);
main.appendChild(newArticle);
