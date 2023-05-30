AFRAME.registerComponent("game", {
    schema: {
        gameState: { type: "string", default: "play" },
      },

    init: function () {
        var duration = 300;
        var timerEl = document.querySelector("#timer");
        this.startTimer(duration, timerEl);
    },

    
})
