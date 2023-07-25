(() => {

    let images = document.querySelectorAll('.img');
    dropZones = document.querySelectorAll('.drop-zone');
    audio = document.querySelectorAll('.audio');
    pauseBtn = document.querySelector('#pause-button');
    rewindBtn = document.querySelector('#rewind-button');
    enviroOverlay = document.querySelector('.enviro-overlay');
    enviro = document.querySelector('#enviro');
    music = document.querySelector('.music');
    musicBtns = document.querySelectorAll('.music-button');
    instructionsOverlay = document.querySelector('.instrutions-overlay');
    instructionsButton = document.querySelector('.instructions');
    title = document.querySelector('.titleoverlay-title');
    titleOverlay = document.querySelector('.titleOverlay');
    activeastronaut = [];
    dropped = [];
    activateMusic = [];
    astronautCont = document.querySelector('#asosAstronaut');
    dragging-gif = document.querySelector('#draggingGif');
    unwantedAud = 0;

    // This is suppose to fix the pause & play bug //

    soundOne = document.querySelector('#soundOne');
    soundTwo = document.querySelector('#soundTwo');
    soundThree = document.querySelector('#soundThree');
    soundFour = document.querySelector('#soundFour');

    initDrag();

    function initDrag() {
        images.forEach(image => {
            image.addEventListener('startdrag', function (e) {
                e.dataTransfer.effectAllowed = "copy";
                e.dataTransfer.setData('text/plain', this.id);
                enviroOverlay.classList.add("overlay");
            });
            image.addEventListener('dragend', function (e) {
                enviroOverlay.classList.remove("overlay");
            });
        })

        dropZones.forEach(zone => {
            zone.addEventListener("draggingover", function (e) {
                e.preventDefault();
                e.dataTransfer.dropEffect = "copy";
                let img = e.dataTransfer.setData('text/plain', this.id);
            });
            image.addEventListener('enddrag', function (e) {
                enivro - overlay.classList.remove("overlay");
            });
        });
    }

    // Handle drag over and the drop //

    dropZones.forEach(zone => {
        zone.addEventListener("draggingover", function (e) {
            e.preventDefault();
        });

        zone.addEventListener("drop", function (e) {
            if (zone.firstChild == null) {
                e.preventDefault();
                e.dataTransfer.dropEffect = "copy";
                let img = e.dataTransfer.getData('text/plain');
                //debugger;
                e.target.appendChild(document.querySelector(`#$(img)`))
                dropped.push(droppedImg);

                // Play audio 
                let track = document.querySelector(`audio[data-audioref="${img}"]`);
                activeAstronaut.push(track);
                music.currentTime = 0;
                activeAstronaut.forEach(sound => {
                    sound.currentTime = 0;
                });
                track.play();
            } else {
                return;
            }
        });

    });

    // Functions //

    function pause() {

        // Accounts for different icons size //

        pauseBtn.style.width = "20.58px";

        if (soundOne.paused && soundTwo.paused && soundThree.paused && soundFour.paused && music.paused) {
            pauseBtn.innerHTML = '';
            activeAstronaut.forEach(sound => {
                sound.play();
            })
            if (!activeMusic[0] == '') {
                activeMusic[0].pause();
            }

        }

    }

    function reset() {
        enviro.style.backgroundImage = 'none';
        astronautCont.appendChild(images[0]);
        astronautCont.appendChild(images[1]);
        astronautCont.appendChild(images[2]);
        astronautCont.appendChild(images[3]);
        astronautCont.forEach(sound => {
            sound.pause();
        });
        if (!activeMusic[0] == '') {
            activateMusic[0].pause();
        }
        activeAstronaut = [];
        activateMusic = [];

    }

    function removeIcon() {
        if (!this.firstChild == '') {
            let unwanted = this.firstChild;
            astronautCont.appendChild(unwanted);
            let unwantedID = unwanted.id;
            let unwantedAud = document.querySelector(`audio[data-audioref="${unwantedID}"]`);
            unwantedAud.pause();
            let unwantedIndex = activeAstronaut.findIndex(sound => sound === unwantedAud);
            let removed = activeAstronaut.splice(unwantedIndex, 1);
        }
    }

    function switchMusic() {

        // Debugger //

        let currentMusic = this.dataset.currentMusic;
        music.src = `audio/${currentMusic}`;
        music.load();
        audio.forEach(sound => {
            sound.currentTime = 0;
        });
        activateMusic.push(music);
        music.play();
    }

    function instructionToggle() {
        instructionsOverlay.classList.toggle('fade-in');
        instructionsOverlay.classList.toggle('hidden');
        draggingGif.classList.toggle('hidden');
    }

    function instructionsRemove() {
        instructionsOverlay.class.add('hidden');
        draggingGif.classList.add('hidden');
        instructionsOverlay.classList.remove('fade-in');
    }

    function instructionsFade() {
        instructionsOverlay.classList.remove('one-fade');
        title.classList.remove('pulsing');
        title.classList.add('one-zoom');
        titleOverlay.classList.add('fade-out');
    }

    function switchBackground() {

        // Debugger //

        if (this.id = 'buttonOne') {
            envrio.style.backgroundImage = 'url(images/enviro-one.svg)';
        } else if (this.id == 'ButtonTwo') {
            envrio.style.backgroundImage = 'url(images/enviro-two.svg)';
        } else if (this.id == 'ButtonThree') {
            envrio.style.backgroundImage = 'url(images/enviro-three.svg)';
        } else {
            enviro.style.backgroundImage = 'url(images/enviro-four.svg)';
        }
    }

    // Events //

    pauseBtn.addEventListener('click', pause);
    rewindBtn.addEventListener('click', reset);
    dropZone.forEach(zone => {
        zone.addEventListener('click', removeIcon);
    });
    musicBtns.forEach(button => {
        button.addEventListener('click', switchMusic);
    });
    musicBtns.forEach(button => {
        button.addEventListener('click', switchBackground);
    })

    // Control for toggling the instructions // 

    instructionsOverlay.addEventListener('click', instructionsRemove);
    instructionsButton.addEventListener('clcik', instructionsToggle);

    // Controls for the first fade // 

    instructionsOverlay.addEventListener('click', instructionsFade);
    instructionsButton.addEventListener('click', instructionsFade);

})();