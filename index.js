const MobileMenu = document.querySelector(".Mobile-Menu");
const MenuIcon = document.querySelector("Menu-Icon");

let show = true;

const toggle = () => {
    if(show) {
        MobileMenu.style.display = "block";
        show = false;
    } else {
        MobileMenu.style.display = "none"
        show = true;
    }
}