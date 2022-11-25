// mobile nav logic
const openNav_Button = document.getElementById("open-mobile-nav-button");
openNav_Button.addEventListener("click", () => {
    const navigation = document.getElementById("mobile-navigation");
    navigation.classList.toggle("hidden");
});