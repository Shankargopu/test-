const moment = require("moment");

const tranTimeStamp=moment(new Date()).format("YYYYMMDDhhmmss")
console.log(tranTimeStamp);  


const fromDate=moment(new Date()).format("DDMMYYYY")
console.log(fromDate);
// console.log(+date2.slice(4) + 90)
const ninetyadd = +fromDate.slice(4) + 79
const toDate = fromDate.slice(0,4) + ninetyadd 
console.log(toDate)
// const toDate = moment(new Date(''))
// const toDate = 
// const date4=moment(new Date()).format("0000YYYY")
// console.log(date2, date4)
// console.log(+date2 + +date4);

const date3=moment(new Date()).format("DD")
console.log(date3);

