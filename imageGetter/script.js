document.getElementById("form").addEventListener("submit", formSubmit);

const unsplashApiKey = "LGYdhFr9OaXxY6jAe4O0t4Dcbk3N8npmfdZbAmZpGmY";

function formSubmit(evt) {
  evt.preventDefault();

  const searchBar = document.getElementById("searchBar");
  const searchName = searchBar.value;

  let imgApi = new URL(`https://api.unsplash.com/`);
  imgApi.pathname = `search/photos`;
  imgApi.search = `query=${searchName}`;

  const imgPara = document.getElementById("img");

  fetch(imgApi, {
    headers: {
      Authorization: "Client-ID _NT_bXtvGlvXc89PFyTP2yE7wlOBpWwxceZiSTWCLqs",
    },
  })
    .then((response) => response.json())
    // .then((data) => console.log(data));
    .then((data) => imgPara.setAttribute("src", data.results[0].urls.thumb));
}
