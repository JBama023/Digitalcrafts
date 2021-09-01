async function getFluff() {
        const kitPics = await fetch(
            "https://cataas.com/cat?json=true"
        );
        console.log(kitPics)
        const catContainer = document.querySelector(".cat-pics");
        const jsonKits = await kitPics.json();
        const meow = document.createElement("img");
        console.log(jsonKits)
        meow.src = "https:/cataas.com"+jsonKits.url;
        catContainer.append(meow);
       
        }
getFluff();