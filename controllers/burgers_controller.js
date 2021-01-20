const express = require('express')
const router = express.Router()
//const orm = require('../config/orm')
var burger = require("../models/burger.js")



// router.get('/', (req,res)=> {
//     burger.selectAll(function(result) {
//         console.log(result)
//         res.render('index',{data:result})
//     } ) 

// })

// router.get('/api/burgers', function(req,res) {
//   console.log(orm.selectAll)
//   orm.insertOne
//   console.log("hello");

// })

router.get("/", (req, res) => {
    burger.selectAll(data => {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject)

    })
})

router.post("/api/burger", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function (result) {

        res.json({ id: result.insertId })


    })
})





router.put("/api/burger/:id", (req, res) => {

    var burgerId=req.params.id;
  

    burger.updateOne(burgerId, function(result) {
      
       //console.log('RESULT--->',result)
       //console.log('result.changedRows--->', result.changedRows)
    
     if(result.changedRows === 0){
         return res.status(400).end();
        
        }
        else{
           return res.status(200).end();
           
        } 

    })
})
 

module.exports = router;