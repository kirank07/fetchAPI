const URL = "https://cat-fact.herokuapp.com/facts";
const factText = document.querySelector("#factText");
const btn = document.querySelector("#btn");
const getFacts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    factText.innerText = data[2].text;
};

btn.addEventListener("click",getFacts);
