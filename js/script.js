window.addEventListener("load", () => {

    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual  = document.querySelector(".visual");

    const colors = [

        "#ff7f50",
        "#ff4757",
        "#2f3542",
        "#2ed573",
        "#3d3d3d",
        "#67e6dc"
    ]


    pads.forEach((pad, index) => {
        pad.addEventListener("click", () => {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createVisuals(index);
        });
    })

    const createVisuals = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";

        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
        });
    }

});