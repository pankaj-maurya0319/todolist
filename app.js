const express = require("express");
const bodyParser = require("body-parser");
const { static } = require("express");
const date = require(__dirname+"/date.js");
const app = express();

console.log(date);

var items = ["study maths", "study Physics", "web-development"];
var workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("public"));

app.set("view engine", "ejs");
app.get("/", function (req, res) {

    
    // var currentDay = today.getDay();
    // var day ="";

    // switch (currentDay) {
    //     case 0:
    //         day="Sunday"
    //         break;
    //         case 1:
    //         day="Monday"
    //         break;
    //         case 2:
    //         day="Tuesday"
    //         break;
    //         case 3:
    //         day="Wednesday"
    //         break;
    //         case 4:
    //         day="Thrusday"
    //         break;
    //         case 5:
    //         day="Friday"
    //         break;
    //         case 6:
    //         day="Saturday"
    //         break;

    //     default:
    //         console.log("Error: current day is "+currentDay);
    //         break;
    // }
    // var options = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long"
    // }
    // var day = today.toLocaleDateString("en-us", options);
    res.render("index", {
        listTitle: date(),
        newListItems: items
    });

});


app.post("/", function (request, response) {
    var item = request.body.newItem;

    if(request.body.list==="work"){
        workItems.push(item);
        response.redirect("/work");
    }else{
        items.push(item);
        response.redirect("/");
    }
    
});

app.get("/work", function (req, res) {
    res.render("index", { listTitle: "work List", newListItems: workItems })
})

app.get("/about",function (req,res){
   res.render("about");
} );
    
// app.post("/work", function (req, res) {
//     var newItem = req.body.newItem;
    

// })
app.listen(3000, function (response) {
    console.log("server started at port 3000.");
});