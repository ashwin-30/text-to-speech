let currentSpeech = null;

function speak() {
    const textToSpeak = document.getElementById('textToSpeak').value;
    const speech = new SpeechSynthesisUtterance(textToSpeak);
    
    // Stop any ongoing speech before starting a new one
    stopSpeaking();

    // Save the reference to the current speech
    currentSpeech = speech;
    // Set the rate to control the speed (0.5 is slower, 2.0 is faster)
    currentSpeech.rate = 0.7;
    speechSynthesis.speak(speech);
    console.log(`Speaking: ${textToSpeak}`);
}

function stopSpeaking() {
    // Check if there is an ongoing speech
    if (currentSpeech !== null) {
        // Stop the current speech
        speechSynthesis.cancel();
        console.log('Speech stopped');
    }
}
