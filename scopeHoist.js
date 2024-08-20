// we print the x in function before we assign to it a value so it s basically
//    var x => console.log(x) => x = 20;

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();

//undefined