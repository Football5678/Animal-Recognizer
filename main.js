function SoundClassification() {
navigator.mediaDevices.getUserMedia({audio:true})
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gDwPNhyXx/model.json',model_ready)
}
function model_ready() {
    classifier.classify(gotResults)
}
function gotResults(error,results){
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("sound_object").innerHTML="I can hear - "+results[0].label
        document.getElementById("sound_accuracy").innerHTML="Accuracy : "+results[0].confidence.toFixed(2)*100+"%"
        image1=document.getElementById("Ear");

      
       
if (results[0].label=="Dog") {
    image1.src="Dog.jpg";
   
} else if(results[0].label=="Cat") {
    image1.src="Cat.jpg";
   
    
} 
    
else if(results[0].label=="Background Noise") {
    image1.src="Ear.jpg";
    
    
}




    }
}
