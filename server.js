const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 4000;
app.listen(PORT, err => err ? console.log(err) : console.log(`server is runing on port ${PORT}`));

// app.use(function (req, res, next) {
//     var date = new Date();
//     let day = date.getDay();
//     let hour = date.getHours();

//     if (day > 0 && day < 6 && hour > 9 && hour < 17) {
//         next();
//     } else {
//         res.send("<h1> SERVER OFF </h1>");
//     }
// });
app.use(express.static(path.join(__dirname, "public")));