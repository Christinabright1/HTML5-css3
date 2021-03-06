const closeBtn= document.getElementById("close");
const openBtn = document.getElementById("open");
const navlist = document.querySelector(".nav-list");

openBtn.addEventListener("click", () => {
 if (navlist.className === "nav-list") {
    navlist.className += " mobile-menu";
  } else {
    navlist.className = "nav-list";
  }
})
