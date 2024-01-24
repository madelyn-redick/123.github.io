const myHeading = document.querySelector("h1");
myHeading.textContent = "Danny DeVito!";

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/dannyDevito1.jpeg") {
        myImage.setAttribute("src", "images/dannyDevito2.jpeg");
    } else {
        myImage.setAttribute("src", "images/dannyDevito1.jpeg");
    }
};

document.querySelector("button").addEventListener("click", function () {
    alert("Glad you agree, he is awesome!");
});