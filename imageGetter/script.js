const unsplashApiKey = "LGYdhFr9OaXxY6jAe4O0t4Dcbk3N8npmfdZbAmZpGmY";

document.getElementById("form").addEventListener("submit", formSubmit);

function formSubmit(evt) {
  evt.preventDefault();

  const searchBar = document.getElementById("searchBar");
  const searchVal = searchBar.value;
  const unsplashApiUrl = `https://api.unsplash.com/photos/?client_id=${unsplashApiKey}`;

  fetch(unsplashApiUrl) 
    .then(function (res) {
      return res.json();
    })
    .then(function (imgDisplay) {
      var img = document.getElementById("img");
      img.innerHTML = imgDisplay.img;
    });
}