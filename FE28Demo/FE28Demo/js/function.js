//express fn
var fn_demo_2 = function() {
    console.log("Day la callback function");
}

fn_demo(fn_demo_2);

fn_demo(function(){
    console.log("Day la callback function tu define");
});

//declare function
function fn_demo(fnCallback) {
    fnCallback();
}

//arrow function
// let fn_demo = (d, e) => {

// }
