// ========================= giphy-api ===============================

const baseURL = "https://api.giphy.com/v1/gifs/search?";
const key = "api_key=RDK2A9QblFCZWWsTLB8DDNlcdE5MrQP4";
const limit = "&limit=10";
const params = "&q=";

const search = document.querySelector("#search");
const form = document.querySelector("form");
const input = document.querySelector("#inp");
const select = document.querySelector("#count");
const output = document.querySelector("#output");

const searchGiphy = async () => {
  let limit = select.value;
  // URL-адрес API, чтобы включить это значение
  let API = `${baseURL}${key}&limit=${limit}${params}${input.value}`;

  const req = await fetch(API);
  const res = await req.json();
  render(res.data);
  input.value = "";
};

const render = (data) => {
  output.innerHTML = "";
  data.map((e) => {
    console.log(e);
    const card = document.createElement("div");
    const title = document.createElement("h3");
    title.style.color = "green";
    title.style.fontSize = "10px";
    title.style.width = "150px";
    title.style.paddingBottom = "15px";
    title.style.textAlign = "center";
    const giff = document.createElement("iframe");
    title.textContent = e.title;
    giff.src = e.embed_url;
    card.append(title, giff);
    output.append(card);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchGiphy();
});
