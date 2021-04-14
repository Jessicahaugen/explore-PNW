let images = document.querySelector("#photos");

let getImages = async () => {
  const retrieveImages = fetch(
    "https://developer.nps.gov/api/v1/parks?stateCode=WA,OR,ID&api_key=HUxRiqwN849LGQztfrgmnxS3egwTOmsLJp8fXvEH"
  );
  const imagesJson = await (await retrieveImages).json();

  const parkImages = imagesJson.data
    .map((i) => i.images)
    .reduce((a, b) => a.concat(b), [])
    .slice(0, 10);
  // console.log(parkImages)
  for (image of parkImages) {
    let newImage = image.url;
    console.log(newImage);

    images.innerHTML +=
      '<div class="col-sm-6 col-md-4 col-lg-3 item"><a href="' +
      newImage +
      '" data-lightbox="photos"><img class="img-fluid" src="' +
      newImage +
      '"></a></div>';

    //    let newImage = Math.floor(Math.random()*image.url.length);
  }
};
getImages();
