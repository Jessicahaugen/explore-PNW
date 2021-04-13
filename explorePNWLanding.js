let parkList = document.querySelector(".parkList")

//function to get park info and display in card format
const getParks = async () => {
    const getInfo = await fetch ("https://developer.nps.gov/api/v1/parks?stateCode=WA,OR,ID&api_key=HUxRiqwN849LGQztfrgmnxS3egwTOmsLJp8fXvEH");
    const convertInfo = await getInfo.json();
    console.log(convertInfo);

    for (let i = 1; i <17; i++) {
        let parkContainer = document.createElement("div");
        parkContainer.class = "parkContainer";
        let mainImg = document.createElement("img");
        mainImg.className = "parkImage";
        mainImg.height = "300";
        mainImg.width = "300";
        mainImg.src =  convertInfo.data[i].images[0].url;
        let parkState = document.createElement("h3")
        parkState.innerHTML=`State: ${convertInfo.data[i].states}`;
        let parkInfo= document.createElement("p");
        parkInfo.innerText = convertInfo.data[i].description;
        let parkName = document.createElement("h2");
        parkName.innerHTML = convertInfo.data[i].fullName;


        parkContainer.append(mainImg,parkName,parkState,parkInfo,);
        parkList.append(parkContainer);
   
    }
}   

//button event listeners to change activity name
let hikingBtn = document.querySelector("#hiking");
    hikingBtn.addEventListener("click", function() {
        getActivity("Hiking"); 
})
let skiingBtn = document.querySelector("#skiing");
        skiingBtn.addEventListener("click", function() {
    getActivity("Skiing"); 
})
let bikingBtn = document.querySelector("#biking");
    bikingBtn.addEventListener("click", function() {
    getActivity("Biking"); 
})
let campingBtn = document.querySelector("#camping");
    campingBtn.addEventListener("click", function() {
    getActivity("Camping"); 
})
let birdBtn = document.querySelector("#birdwatching");
    birdBtn.addEventListener("click", function() {
    getActivity("Birdwatching"); 
})
let fishingBtn = document.querySelector("#fishing");
    fishingBtn.addEventListener("click", function() {
    getActivity("Fishing"); 
})
let toursBtn = document.querySelector("#tours");
    toursBtn.addEventListener("click", function() {
        getActivity("Guided Tours"); 
    })
let horseBtn = document.querySelector("#horseback");
    horseBtn.addEventListener("click", function() {
        getActivity("Horseback Riding"); 
    })
//Function to filter API by Activity name and return appropriate parks
const getActivity = async (activityName) => {
    const getInfo = await fetch ("https://developer.nps.gov/api/v1/parks?stateCode=WA,OR,ID&api_key=HUxRiqwN849LGQztfrgmnxS3egwTOmsLJp8fXvEH");
    const convertInfo = await getInfo.json();
    console.log(convertInfo);
   

    const matchingParks = convertInfo.data.filter(d => d.activities.find(a => a.name === activityName)) 
    console.log(matchingParks)
    
    for (parks of matchingParks){
        let i = 0;
        let parkContainer = document.createElement("div");
        parkContainer.class = "parkContainer";
        let mainImg = document.createElement("img");
        mainImg.className = "parkImage";
        mainImg.height = "300";
        mainImg.width = "300";
        mainImg.src =  parks.images[0].url;
        let parkState = document.createElement("h3")
        parkState.innerHTML=`State: ${parks.states}`;
        let parkInfo= document.createElement("p");
        parkInfo.innerText = parks.description;
        let parkName = document.createElement("h2");
        parkName.innerHTML = parks.fullName;
        parkContainer.append(mainImg,parkName,parkState,parkInfo,);
        parkList.append(parkContainer);
        i += 1;
    }
}
// getActivity();
let removeButtons = document.querySelector(".buttons");
let seeAllBtn = document.querySelector(".seeAll");
seeAllBtn.addEventListener("click", function() {
getParks();
removeButtons.innerHTML= "";
})



