//jshint esversion:6


let booked;

function myFunction(x) {
console.log(x)
booked = x;

console.log("booked: "+ booked);

return x;

}

function getVal(book){
    return booked;
}


module.exports = {
    myFunction: myFunction,
    booked:booked,
    getVal: getVal
    
};
