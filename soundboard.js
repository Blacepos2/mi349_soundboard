
var getPlaySoundCallback = function(id) {
	return function() {
		var sound = document.getElementById(id + "-audio");
		sound.play();
	}
}

var sounds = ["kick", "snare", "hi-hat", "shaker"]

for (const id of sounds) {

	var button = document.getElementById(id);

	button.addEventListener('click', getPlaySoundCallback(id));
	button.addEventListener('mouseenter', getPlaySoundCallback(id));
}

document.getElementById("example")
	.addEventListener('click', getPlaySoundCallback("example"));