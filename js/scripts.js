window.addEventListener( "load", function() {

  const headOne = document.querySelector("h1");
  headOne.textContent = "Webpage Recreation Practice";
  
  const pOne = document.createElement("p");
  pOne.append("The HTML of this webpage was created with JavaScript.");
  
  const img = document.createElement("img");
  img.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";

  const secondH1 = document.createElement("h1");
  secondH1.append("Facts about the Multicolored Tanager");


  const li1 = document.createElement("li");
  li1.append("It is endemic to the mountains of Colombia.");
  const li2 = document.createElement("li");
  li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet..");
  const firstUl = document.createElement("ul");
  firstUl.prepend(li1);
  firstUl.append(li2);

  const headTwo = document.createElement("h2");
  headTwo.append("Source");

  const anchor = document.createElement("a");
  anchor.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  anchor.innerText = "wikipedia";

  
  document.querySelector("body").append(pOne, img, secondH1, firstUl, li1, li2, headTwo, anchor);

});