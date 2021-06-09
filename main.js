video=""
status=""
function setup() {
    canvas=createCanvas(500,400)
    canvas.center()  
}
function preload(){
    video=createVideo("video.mp4")
    video.hide()
}
function draw() {
    image(video,0,0,500,400)
}
function modelloaded(){
    console.log("Model Has Been Loaded")
    status=true
    video.loop()
    video.speed(1)
    video.volume(1)
}
function start(){
    objectdetector=ml5.objectDetector("cocossd",modelloaded)
    document.getElementById("status").innerHTML="Status:Detecting Objects"
}