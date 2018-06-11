const nodemon = require("nodemon");

nodemon({
    script: "app.js",
    ext: "js json"
});

const message = function(text) {
    console.log(`[Nodemon] ${text}`);
};

nodemon
    .on('start', () => message('application has started'))
    .on('restart', files => message('application restarted due to: ', files))
    .on('quit', () => {
        message('application has quit');
        process.exit();
    });