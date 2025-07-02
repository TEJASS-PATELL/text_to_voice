const textarea = document.getElementsByClassName("textarea")[0];
let speech = new SpeechSynthesisUtterance();
//!  The SpeechSynthesisUtterance represents a speech request. It contains the content that the speech service should read and information about how to read it (e.g., language, pitch, and volume).


let voice = [];
let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voice = window.speechSynthesis.getVoices();
    speech.voice = voice[0];

    voice.forEach((voice , i) => (voiceselect.options[i] = new Option(voice.name , i)));
};

voiceselect.addEventListener("change", () =>{
    speech.voice = voice[voiceselect.value];
})

document.querySelector("button").addEventListener("click",function(){
    if(!textarea.value){
        return alert('Enter Text');
    }
    else{
        speech.text = document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech);
    }
})