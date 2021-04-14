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
  console.log(convertInfo.data);

  parkList.innerHTML = "";

  for (let i = 0; i < convertInfo.data.length; i++) {
    let parkContainer = document.createElement("div");
    parkContainer.className = "parkContainer";
    parkContainer.id ="parkCard"
    let mainImg = document.createElement("img");
    mainImg.className = "parkImage";
    mainImg.height = "300";
    mainImg.width = "300";
    mainImg.src = convertInfo.data[i].images[0].url;
    let parkState = document.createElement("h3");
    parkState.innerHTML = `State: ${convertInfo.data[i].states}`;
    let parkInfo = document.createElement("p");
    parkInfo.innerText = convertInfo.data[i].description;
    let parkName = document.createElement("h2");
    parkName.innerHTML = convertInfo.data[i].fullName;
    let heart = document.createElement("button");
    heart.innerHTML = '<img src="heart.jpeg" width="20px" height="20px">';
    heart.className = "heart";

    // let heartBtn = document.querySelector(".heart");
    heart.addEventListener("click", function () {
      favorites.push(convertInfo.data[i].id);
    //   heart.className += " favorited";
    });
    parkContainer.append(mainImg, parkName, parkState, parkInfo, heart);
    parkList.append(parkContainer);
  }
};

// create a list of favorites
// const createFavorites = () => {

    // }
let deleteContainer = (id) => { 
document.getElementsByClassName(`${id}`).remove();
}

//button event listeners to change activity name
let hikingBtn = document.querySelector("#hiking");
hikingBtn.addEventListener("click", function () {
  getParks("Hiking");
  parkList.innerHTML="";
});
let skiingBtn = document.querySelector("#skiing");
skiingBtn.addEventListener("click", function () {
  getParks("Skiing");
  parkList.innerHTML=""
});
let bikingBtn = document.querySelector("#biking");
bikingBtn.addEventListener("click", function () {
  getParks("Biking");
  parkList.innerHTML="";
});
let campingBtn = document.querySelector("#camping");
campingBtn.addEventListener("click", function () {
  getParks("Camping");
  deleteContainer(".parkCard")
});
let birdBtn = document.querySelector("#birdwatching");
birdBtn.addEventListener("click", function () {
  getParks("Birdwatching");
});
let fishingBtn = document.querySelector("#fishing");
fishingBtn.addEventListener("click", function () {
  getParks("Fishing");
});
let toursBtn = document.querySelector("#tours");
toursBtn.addEventListener("click", function () {
  getParks("Guided Tours");
});
let horseBtn = document.querySelector("#horseback");
horseBtn.addEventListener("click", function () {
  getParks("Horseback Riding");
});
//Function to filter API by Activity name and return appropriate parks REFACTORED INTO ONE FUNCTION!
// const getActivity = async (activityName) => {
//     const getInfo = await fetch ("https://developer.nps.gov/api/v1/parks?stateCode=WA,OR,ID&api_key=HUxRiqwN849LGQztfrgmnxS3egwTOmsLJp8fXvEH");
//     const convertInfo = await getInfo.json();
//     console.log(convertInfo);

//     const matchingParks = convertInfo.data.filter(d => d.activities.find(a => a.name === activityName))
//     console.log(matchingParks)

//     for (parks of matchingParks){
//         let i = 0;
//         let parkContainer = document.createElement("div");
//         parkContainer.class = "parkContainer";
//         let mainImg = document.createElement("img");
//         mainImg.className = "parkImage";
//         mainImg.height = "300";
//         mainImg.width = "300";
//         mainImg.src =  parks.images[0].url;
//         let parkState = document.createElement("h3")
//         parkState.innerHTML=`State: ${parks.states}`;
//         let parkInfo= document.createElement("p");
//         parkInfo.innerText = parks.description;
//         let parkName = document.createElement("h2");
//         parkName.innerHTML = parks.fullName;
//         parkContainer.append(mainImg,parkName,parkState,parkInfo,);
//         parkList.append(parkContainer);
//         i += 1;
//     }
// }
// getActivity();
let removeButtons = document.querySelector(".buttons");
let seeAllBtn = document.querySelector(".seeAll");
seeAllBtn.addEventListener("click", function () {
  getParks();
  removeButtons.innerHTML = "";
});

    
    // show favorites
    // getParks(null, true)


