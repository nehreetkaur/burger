
var connection = require("../config/connection.js");



const orm = {




      
         //console.log('SELECT ALL ORM');   // cb is callback function
         selectAll:  function (table, cb) {
            var queryString = "SELECT * FROM " + table + ";";
            connection.query(queryString, function(err, result) {
              if (err) {
                throw err;
              }
              cb(result);  //res 
            });    
        



    },

    insertOne: function(table,column,value,cb) {

       // console.log('insertOne ORM')
       var queryString="INSERT INTO ??(??) VALUES (?)";
       connection.query(queryString,[table,column,value],function (err,res){
         if(err)throw err;
         cb(res);

       })

    },

    updateOne: function(table,column,burgerId,cb) {
        //console.log('updateOne ORM')
        var queryString="UPDATE ?? SET ?? =1 WHERE id=?";
        connection.query(queryString,[table,column,burgerId],function(err,res){
          if(err)throw err;
          cb(res);
        })
    }

    

}



module.exports = orm;