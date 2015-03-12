var exec = require("child_process").exec;
var install = function (command) {
    console.info(fileName, "Started : ", command);
    var output = exec(command).output;
    if (output) {
        console.info(output);
    }
    console.info(fileName, "Finished : ", command);
};

var fileName = "[npm-pre-install]";

install("where flatten-packages /q nofile || npm install flatten-packages -g");
install("where gulp /q nofile || npm install gulp -g");
install("where bower /q nofile || npm install bower -g");
install("where bower-installer /q nofile || npm install bower-installer -g");
install("where tsd /q nofile || npm install tsd -g");
install("IF exist ../node_modules ( move ../node_modules ./node_modules )");