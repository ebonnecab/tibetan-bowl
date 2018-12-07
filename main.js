const soundOne = new Audio(["audio/sound-1.mp3"]);
const soundTwo = new Audio(["audio/sound-2.wav"]);
const soundThree = new Audio(["audio/sound-3.wav"]);
const soundFour = new Audio(["audio/sound-4.wav"]);
const soundFive = new Audio(["audio/sound-5.mp3"]);
const sounds = [soundOne, soundTwo, soundThree, soundFour, soundFive];


function drumOne() {
    soundOne.play();
}

function drumTwo() {
    soundTwo.play();
}

function drumThree() {
  soundThree.play();
}

function drumFour() {
  soundFour.play();
}

function drumFive() {
    soundFive.play();
}

function pause() {
    sounds.forEach((item) => {item.pause()})
}

