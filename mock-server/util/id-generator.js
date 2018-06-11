const generateId = function () {
    return Math.random() //TODO make generation authentic
        .toString(36)
        .substr(2, 9);
};

module.exports = generateId;
