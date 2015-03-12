var exec = require("child_process").exec;
var install = function (command) {
    console.info(fileName, "Started : ", command);
    var output = exec(command).output;
    if (output) {
        console.info(output);
    }
    console.info(fileName, "Finished : ", command);
};

var fileName = "[npm-post-install]";

install("bower-installer install -r");
install("flatten-packages");
install("move ./node_modules ../node_modules");