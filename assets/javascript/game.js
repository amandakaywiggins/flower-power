var game = {
    
    //variables to setup game play
    pollinationGoal: null,
    pollenCount: 0,
    wins: 0,
    losses: 0,
    damage: null,

    //set up flowers
    setUpGame: function() {
        //chose a pollination goal
        pollinationGoal = [Math.floor(Math.random() * 120) + 1];
        document.querySelector("#pollination-goal").append(pollinationGoal);
        //assign each flower a pollen count
        var flowers = ["daffodil", "lavender", "magnolia", "wisteria"];
        for (j=0; j < flowers.length; j++) {
        flowers[j] = [Math.floor(Math.random() * 12) + 1];
        }
    },

    updatePage: function() {
        //log pollen
        var pollenLog = [];
        //add each click of a flower together
        var assessPollenLevels = function() {
            $("#flowers").on("click" , $("#daffodil") , function() {
                pollenLog.push(daffodil);
            })
            $("#flowers").on("click" , $("#lavender") , function() {
                pollenLog.push(lavender);
            })
            $("#flowers").on("click" , $("#magnolia") , function() {
                pollenLog.push(magnolia);
            })
            $("#flowers").on("click" , $("#wisteria") , function() {
                pollenLog.push(wisteria);
            })
        }
        for (i=0; i < pollenLog.length; i++) {
            pollenLevels += pollenLog[i];
        }
    },
    gamePlay: function() {
        //game functions
        if (pollinationGoal === pollenLevels) {
            document.querySelecter("#wins").html = win + 1;
            document.querySelector("#pollen-count").html = "";
        } else if (pollinationGoal > pollenLevels) {
            document.querySelector("#pollen-count").append(pollinationGoal);
        } else {
            document.querySelector("#losses").html = losses + 1;
            document.querySelector("#pollen-count").html = "";
        }
    },
};

game.setUpGame();

document.onclick = game.updatePage();

console.log(daffodil);
console.log(lavender);
console.log(magnolia);
console.log(wisteria);