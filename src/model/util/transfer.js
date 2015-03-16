function Transfer() {
}

Transfer.transToHanzi = function(value) {

    var dictionary = {
        1 : '一',
        2 : '二',
        3 : '三',
        4 : '四',
        5 : '五',
        6 : '六',
        7 : '七',
        8 : '八',
        9 : '九'
    };
    var result = dictionary[Math.floor(value / 10)];
    if(value % 10 !== 0) {
        result += dictionary[value % 10];
    }

    return result;
};

module.exports = Transfer;
