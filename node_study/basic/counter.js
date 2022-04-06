let count = 0;

let increaseCount = () => {
    count++;
}

let getCount = () => {
    return count;
}

module.exports.increaseCount = increaseCount;
module.exports.getCount = getCount;
