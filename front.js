//intialisation
function onLoad(){
let wrapper = document.getElementById("wrapper");
let mainImg = document.getElementById("mobileMainImg");
let navBar = document.getElementById("navbar");
let navLink = document.getElementById("navLink");

let windowWidth = parseInt(window.innerWidth);
console.log(windowWidth);
if (windowWidth <= 375-16) {
   mainImg.src = "assets/images/image-web-3-mobile.jpg";
  //created a drawer closer
  var drawerCloser = document.createElement("img");
  drawerCloser.id = "drawCloser";
  drawerCloser.src = "assets/images/icon-menu-close.svg";
  navLink.appendChild(drawerCloser);
  //adding event to drawer closer
  drawerCloser.addEventListener("click", () => {
    navLink.style.display = "none";
  });
  //created a burger
  var burger = document.createElement("img");
  burger.src = "assets/images/icon-menu.svg";
  burger.style.alignSelf = "center";
  navBar.append(burger);
  burger.addEventListener("click", () => {
    navLink.style.display = "block";
  });
}
}