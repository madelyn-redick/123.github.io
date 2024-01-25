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

function submitName() {
    const userName = document.getElementById("userName").value;
    alert(`Hello, ${userName}!`);
    const goToWebsite = confirm("Would you like to learn more about mountain goats?");
    if (goToWebsite) {
        window.location.href = "https://www.nationalgeographic.com/animals/mammals/facts/mountain-goat"; // Replace with the desired URL
    }
}