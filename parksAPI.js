let parkList = document.querySelector(".parkList");
var favorites = [];

//function to get park info and display in card format
const getParks = async (activityName, onlyFavorites) => {
  const getInfo = await fetch(
    "https://developer.nps.gov/api/v1/parks?stateCode=WA,OR,ID&api_key=HUxRiqwN849LGQztfrgmnxS3egwTOmsLJp8fXvEH"
  );
  const convertInfo = await getInfo.json();
  convertInfo.data = convertInfo.data
    .filter((d) => {
      if (activityName) {
        return d.activities.find((a) => a.name === activityName);
      }
      return true;
    })
    .filter((d) => {
      if (onlyFavorites) {
        return favorites.includes(d.id);
      }
      return true;
    });


  parkList.innerHTML = "";

  for (let i = 0; i < convertInfo.data.length; i++) {
    let parkContainer = document.createElement("div");
    parkContainer.className = `container-sm`;
    parkContainer.id ="parkCard"
    let imgDiv = document.createElement("div");
    imgDiv.className="imageDiv";
    let mainImg = document.createElement("img");
    mainImg.className = "parkImage";
    mainImg.height = "325";
    mainImg.width = "325";
    mainImg.src = convertInfo.data[i].images[0].url;
    let infoDiv = document.createElement("div");
    infoDiv.className="infoDiv";
    let parkState = document.createElement("h3");
    parkState.innerHTML = `State: ${convertInfo.data[i].states}`;
    let parkInfo = document.createElement("p");
    parkInfo.innerText = convertInfo.data[i].description;
    let parkName = document.createElement("h2");
    parkName.className= "parkNames";
    parkName.innerHTML = convertInfo.data[i].fullName;
    let heart = document.createElement("button");
    heart.innerHTML = `add to favorites <i class="far fa-heart"></i>`;
    heart.className = "heart";

    heart.addEventListener("click", function () {
      favorites.push(convertInfo.data[i].id);
      heart.className += " favorited";
      alert("This park has been added to your favorites! Good luck on your Adventures!");
    })
    infoDiv.append(parkName, parkState, parkInfo, heart)
    imgDiv.append(mainImg);
    parkContainer.append(imgDiv, infoDiv);
    parkList.append(parkContainer);
  }
};

//button event listeners to change activity name
let filterHeader = document.querySelector(".filterTitle");

let hikingBtn = document.querySelector("#hiking");
hikingBtn.addEventListener("click", function () {
  getParks("Hiking");
  filterHeader.innerHTML = "Take a Hike at:";
});
let skiingBtn = document.querySelector("#skiing");
skiingBtn.addEventListener("click", function () {
  getParks("Skiing");
  filterHeader.innerHTML = "Hit the Slopes at:";
  
});
let bikingBtn = document.querySelector("#biking");
bikingBtn.addEventListener("click", function () {
  getParks("Biking");
  filterHeader.innerHTML = "Cycle in Nature at:";

});
let campingBtn = document.querySelector("#camping");
campingBtn.addEventListener("click", function () {
  getParks("Camping");
  filterHeader.innerHTML = "Cycle in Nature at:";
 
});
let birdBtn = document.querySelector("#birdwatching");
birdBtn.addEventListener("click", function () {
  getParks("Birdwatching");
  filterHeader.innerHTML = "Discover the birds at:";
  
});
let fishingBtn = document.querySelector("#fishing");
fishingBtn.addEventListener("click", function () {
  getParks("Fishing");
  filterHeader.innerHTML = "Fish in Peace at:";
});
let toursBtn = document.querySelector("#tours");
toursBtn.addEventListener("click", function () {
  getParks("Guided Tours");
  filterHeader.innerHTML = "Learn the terrain with tours at:";
});
let horseBtn = document.querySelector("#horseback");
horseBtn.addEventListener("click", function () {
  getParks("Horseback Riding");
  filterHeader.innerHTML = "Hit the trails on horseback!";
});
  
let removeButtons = document.querySelector(".buttons");
let seeAllBtn = document.querySelector("#mainBtn");
seeAllBtn.addEventListener("click", function () {
  getParks();
  removeButtons.innerHTML = "";
  filterHeader.innerHTML = "Collection of all National parks in the Pacific NW";
  
});

let favoritedBtn = document.querySelector(".favorites");
favoritedBtn.addEventListener("click", function () {
  getParks(null,true);
  filterHeader.innerHTML = `Favorites <i class="fas fa-heart"></i>`;
  
});



