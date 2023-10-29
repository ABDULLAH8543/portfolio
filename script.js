let contact = document.getElementById("contact");
let btn = document.getElementById("btn");
let git = document.getElementById("git");

contact.addEventListener("click", function () {
        window.location.assign("contact.html");
});
btn.addEventListener("click", function () {
        window.location.assign("contact.html");
});
git.addEventListener("click", function () {
        window.location.assign("https://github.com/ABDULLAH8543");
});
let checkbtn = document.getElementById("check");
let Languages = document.getElementById("Languages");

Languages.addEventListener("click", function () {
    let ul = document.querySelector("ul");
    ul.style.left = "-100%";
    checkbtn.checked = false;
});
let ul = document.querySelector("ul");
let iElement = document.querySelector(".checkbtn i");
let navbtn = document.getElementById("bnav");

  checkbtn.addEventListener("click", function () {
    let check = document.getElementById("check");

    if (check.checked) {
      ul.style.left = "0%";
      iElement.textContent = "✖";
    } else {
      ul.style.left = "-100%";
      iElement.textContent = "☰";
    }
  });
