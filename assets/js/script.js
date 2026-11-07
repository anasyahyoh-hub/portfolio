const heading = document.querySelector(".head-info");
const compactScreen = window.matchMedia("(max-width: 240px)");
const narrowScreen = window.matchMedia("(max-width: 320px)");

function updateHeading() {
    if (compactScreen.matches) {
        heading.textContent = "Math & CS Student";
    } else if (narrowScreen.matches) {
        heading.replaceChildren(
            document.createTextNode("Mathematics and "),
            document.createElement("br"),
            document.createTextNode("Computer Science Student")
        );
    } else {
        heading.textContent = "Mathematics and Computer Science Student";
    }
}

updateHeading();
compactScreen.addEventListener("change", updateHeading);
narrowScreen.addEventListener("change", updateHeading);
