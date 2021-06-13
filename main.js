video=""
status=""
objects=[]
function setup() {
    canvas=createCanvas(500,400)
    canvas.center()  
}
function preload(){
    video=createVideo("video.mp4")
    video.hide()
}
function gotresults(error,result) {
    if (error) {
        console.log(error)
    }
    else{
        console.log(result)
        objects=result
    }
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
function draw() {
    image(video,0,0,500,400)
    if (status !="") {
        objectdetector.detect(video,gotresults)
    }
    for (let i = 0; i< objects.length; i++) {
        document.getElementById("status").innerHTML="Status: Objects Detected"
        document.getElementById("number").innerHTML="Number Of Objects Detected "+ objects.length
        accuracy=floor(objects[i].confidence*100)+"%"
        objectname=objects[i].label
        x=objects[i].x
        y=objects[i].y
        width=objects[i].width
        height=objects[i].height

        fill("red")
        text(objectname+" "+accuracy,x+10,y+15)
        noFill()
        stroke("red")
        rect(x,y,width,height)

    }
}