// setTimeout waits for the loop to finish before it runs what s in the callback function
// if we use let instead of var we get printed 0, 1, 2, 3, 4
// if we use var it s 5, 5, 5, 5, 5


for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}