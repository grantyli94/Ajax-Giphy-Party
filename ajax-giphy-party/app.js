console.log("Let's get this party started!");

let submitButton = $("#submit-button");
submitButton.on("click", function (evt) {
  evt.preventDefault();
  getGiphy();
  // createAndAppendImage(url);
});

async function getGiphy() {
  let textInput = $("#search").val();
  let response = await axios.get('http://api.giphy.com/v1/gifs/search',{params: { q: textInput, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"} })
  let url = response.data.data[0].images.downsized.url;
  let newGif = $(`<img src=${url}>`);
  let container = $(".container");
  container.append(newGif);
}

// function createAndAppendImage(url) {
//   let newGif = $(`<img src=${url}>`);
//   let container = $(".container");
//   container.append(newGif);
// }

