const urls = [
    "https://dog.ceo/api/breed/samoyed/images/random",
    "https://dog.ceo/api/breed/malamute/images/random",
    "https://dog.ceo/api/breed/shiba/images/random"
]

async function fetchData() {
    try {
        const fetchedURLs = Promise.all ([
            fetch(urls[0]),
            fetch(urls[1]),
            fetch(urls[2])
        ]);

        const [fetched1, fetched2, fetched3] = await fetchedURLs;
    
    const data1 = await fetched1?.json();
    const data2 = await fetched2?.json();
    const data3 = await fetched3?.json();

    return { data1, data2, data3 }
    } catch (err) {
        alert("Sorry, your data can't be loaded. Check your internet connection and try to reload this page.")
    }
}


async function insertToPage () {
    try {
    const { data1, data2, data3 } = await fetchData();
    
        const cardImg1 = document.getElementById("img1");
        cardImg1.setAttribute("src", data1.message);
        console.log(cardImg1)

        const cardImg2 = document.getElementById("img2");
        cardImg2.setAttribute("src", data2.message);
        console.log(cardImg2)

        const cardImg3 = document.getElementById("img3");
        cardImg3.setAttribute("src", data3.message);
        console.log(cardImg3)
    } catch (err) {
        alert("Sorry, a problem has occured. Check your internet connection and try to reload the page.")
    }
}


insertToPage()

