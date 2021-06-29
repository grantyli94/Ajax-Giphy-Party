console.log("Let's get this party started!");

let submitButton = $("#submit-button");
submitButton.on("click", async function (evt) {
  evt.preventDefault();
  let url = await getGiphy();
  createAndAppendImage(url);
});

async function getGiphy() {
  let textInput = $("#search").val();
  let response = await axios.get('http://api.giphy.com/v1/gifs/search',{params: { q: textInput, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"} })
  return response.data.data[0].images.downsized.url;
}

function createAndAppendImage(url) {
  let newGif = $(`<img src=${url}>`);
  let container = $(".container");
  container.append(newGif);
}

let removeButton = $("#remove-button");
removeButton.on("click", function(evt){
  evt.preventDefault();
  let container = $(".container");
  container.empty();
})

