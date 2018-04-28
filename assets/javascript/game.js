var game = {
    
    //variables to setup game play
    pollinationGoal: null,
    pollenCount: 0,
    wins: 0,
    losses: 0,
    damage: null,

    //flowers
    flowers: ["daffodil" , "lavender", "magnolia" , "wisteria"],

    //set up flowers
    setUpGame: function() {
        //chose a pollination goal
        pollinationGoal = [Math.floor(Math.random() * 120) + 1];
        document.querySelector("#pollination-goal").append(pollinationGoal);
        //assign each flower a pollen count
        for (j=0; j < game.flowers.length; j++) {
        game.flowers[j] = [Math.floor(Math.random() * 12) + 1];
        }
        document.querySelector("#pollen-count").append(game.pollenCount);
        document.querySelector("#wins").append(game.wins);
        document.querySelector("#losses").append(game.losses);
    },
    updatePage: function(assesPollenLevels) {
        //log pollen
        var pollenLog = [];
        //add each click of a flower together
            $("#flowers").on("click" , $("#daffodil") , function() {
                game.flowers[0] = $("#daffodil");
                pollenLog.push$("#daffodil");
            })
            $("#flowers").on("click" , $("#lavender") , function() {
                flowers[1] = $("#laveder");
                pollenLog.push$("#lavender");
            })
            $("#flowers").on("click" , $("#magnolia") , function() {
                flowers[2] = $("#magnolia");
                pollenLog.push$("#magnolia");
            })
            $("#flowers").on("click" , $("#wisteria") , function() {
                flowers[3] = $("#wistera");
                pollenLog.push$("#wisteria");
            })
        for (i=0; i < pollenLog.length; i++) {
            pollenLevels += pollenLog[i];
        }
    },
    gamePlay: function() {
        //game functions
        if (game.pollinationGoal === game.pollenLevels) {
            document.querySelecter("#wins").html = game.win + 1;
            document.querySelector("#pollen-count").html = "";
        } else if (game.pollinationGoal > game.pollenLevels) {
            document.querySelector("#pollen-count").append(game.pollinationGoal);
        } else {
            document.querySelector("#losses").html = game.losses + 1;
            document.querySelector("#pollen-count").html = "";
        }
    },
};

game.setUpGame();

document.onclick = game.updatePage(game.assesPollenLevels);
console.log(game.flowers[0]);
console.log(game.flowers[1]);
console.log(game.flowers[2]);
console.log(game.flowers[3]);
console.log(game.pollenLog);