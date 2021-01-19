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
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {

        res.json({ id: result.insertId })


    })
})





router.put("/api/burger/:id", (req, res) => {
    var burgerId = req.params.id
    console.log(burgerId);

    // means or creates id=id;
    burger.updateOne(burgerId, result => {
        if (result.changedRows === 0) {              // if no rows were changed,then id must not exist.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;