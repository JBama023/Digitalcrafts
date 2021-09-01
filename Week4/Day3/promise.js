async function getFoxPics() {
        // create a variable
        // await fetch(URL GOES IN HERE)
        const foxPics = await fetch(
            "https://randomfox.ca/floof/"
        );
        const foxContainer = document.querySelector(".fox-images")
        const jsonFoxs = await foxPics.json();
        const foxPic = document.createElement("img");
        foxPic.src = jsonFoxs.image;
        foxPic.width = "600";
        foxPic.height = "400";
        foxContainer.append(foxPic);
        return jsonFoxs;
    }
getFoxPics();
