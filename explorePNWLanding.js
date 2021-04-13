let parkList = document.querySelector(".parkList")


const getParks = async () => {
    const getInfo = await fetch ("https://developer.nps.gov/api/v1/parks?stateCode=WA,OR,ID&api_key=BTdTPERvFV1nekHJgbxCvjcXJB0vpIaKm15h9EIq");
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
// getParks()

const getActivity = async () => {
    const getInfo = await fetch ("https://developer.nps.gov/api/v1/parks?stateCode=WA,OR,ID&api_key=BTdTPERvFV1nekHJgbxCvjcXJB0vpIaKm15h9EIq");
    const convertInfo = await getInfo.json();
    console.log(convertInfo);
    const matchingParks = convertInfo.data.filter(d => d.activities.find(a => a.name === "Hiking")) 
    console.log(matchingParks)
    
    for (parks of matchingParks){
        let i = 1;
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
//if a button IS clicked trigger a function that filters data
//Finds/hiking etc 
//returns those //

let seeAllBtn = document.querySelector(".seeAll");
seeAllBtn.addEventListener("click", function() {
getParks();

})



