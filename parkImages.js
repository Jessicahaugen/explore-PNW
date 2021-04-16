let images = document.querySelector("#photos");

let getImages = async () => {
  const retrieveImages = fetch(
    "https://developer.nps.gov/api/v1/parks?stateCode=WA,OR,ID&api_key=HUxRiqwN849LGQztfrgmnxS3egwTOmsLJp8fXvEH"
  );
  const imagesJson = await (await retrieveImages).json();
  const parkImages = imagesJson.data
  //creating an empty array to insert my  maped object to make it iterable. then concating the array then slicing it so I dont get 100+ photos on the page.
  let photo = []
  for (data of parkImages) {
    let urls = data.images.map(d => d.url);
    photo = photo.concat(urls)
  }
  photo = photo.slice(0, 25);
  for(image of photo){ 
    let newImage = image;
    images.innerHTML +=
    '<div class="col-sm-6 col-md-4 col-lg-3 item"><a href="' +
     newImage +
    '" data-lightbox="photos"><img class="img-fluid" src="' +
    newImage +
    '"></a></div>';            
    }      
};
getImages();
