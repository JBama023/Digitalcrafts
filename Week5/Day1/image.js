const apiKey = "jkeEdYqW3H70dK6izQQtQ7FPDHOIkDHmPkKrhoyx"

const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

const space = document.querySelector(".Iotd")

async function getIotd() {
    const fetchImage = await fetch(apiUrl);
    const jsonSpace = await fetchImage.json();
    console.log(jsonSpace);
    const pictureTitle = document.createElement("h2")
    pictureTitle.innerHTML = jsonSpace.title
    const Picture = document.createElement("img")
    Picture.src = jsonSpace.url
    Picture.style.height = "500px"
    Picture.style.width = "500px"
    const date = document.createElement("h3")
    date.innerHTML = jsonSpace.date
    date.style.textDecoration = "underline"
    const spaceExplanation = document.createElement("p")
    spaceExplanation.innerHTML = jsonSpace.explanation
    space.append(pictureTitle, date, Picture, spaceExplanation)
}
getIotd();