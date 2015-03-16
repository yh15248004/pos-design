function Transfer() {
}

Transfer.transToHanzi = function(value) {

    var dictionary = {
        0 : '',
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
    return dictionary[Math.floor(value / 10)] + dictionary[(value % 10)];
};

module.exports = Transfer;
