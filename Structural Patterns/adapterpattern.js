//Adapter Pattern : Allows to interact with two incompatible interface work together.


//Making target object/class
const playAudio = [
    {name: "abc", type: "mp3"},
    {name:"cde",type: "mp3"},
    {name:"ghf",type:"mp3"}
]

//Adaptee Object/Class
const noPromisess = {
    name: "hij",type:"mp4"
}
const shapeOfYou ={
    name: "Shape of you", type: "flv"
}

//Adapter fucntion which prepares adaptee into target
const toMp3Converter = video =>{
   switch(video.type){
    case "mp4":
        return video.type="mp3"
    case "flv":
        return video.type = "mp3"

    case "mkv":
        return video.type = "mp3"
   }

}

toMp3Converter(shapeOfYou)

playAudio.push(shapeOfYou)

console.log(playAudio)
