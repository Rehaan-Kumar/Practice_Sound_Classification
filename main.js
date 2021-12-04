function start() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json", modelLoaded)
}

function modelLoaded() {
    console.log("MODEL LOADED !!!!!:)")
    classifier.classify( gotResults)
}

function gotResults(error,results) {
    if(error){
        console.error(error)
    }else{
        console.log(results)
        r = Math.floor(Math.random()*255)+1
        g = Math.floor(Math.random()*255)+1
        b = Math.floor(Math.random()*255)+1
        document.getElementById("result_sound").innerHTML="I can hear "+results[0].label
        document.getElementById("result_accuracy").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(1)+"%"
        document.getElementById("result_sound").style.color="rgb("+r+","+g+","+b+")"
        document.getElementById("result_accuracy").style.color="rgb("+r+","+g+","+b+")"
        img1 = document.getElementById("alien_1")
        img2 = document.getElementById("alien_2")
        img3 = document.getElementById("alien_3")
        img4 = document.getElementById("alien_4")
        if(results[0].label == "Clap"){
            img1.src="aliens-01.gif"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }else if(results[0].label == "Snapping"){
            img1.src="aliens-01.png"
            img2.src="aliens-02.gif"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }else if(results[0].label == "Bell"){
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.gif"
            img4.src="aliens-04.png"
        }else{
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.gif"
        }
    }
}