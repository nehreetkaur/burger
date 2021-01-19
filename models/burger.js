const orm = require('../config/orm')
/* 
* **id**: an auto incrementing int that serves as the primary key.
* **burger_name**: a string.
* **devoured**: a boolean. */

var burger={

  selectAll:function(cb){
      orm.selectAll("burgers",function(res){
          cb(res);     // it is essentially the controller
      //console.log(cb);
  });

  },

  insertOne:function(column,value,cb){
    orm.insertOne("burgers",column,value,function(res){
      cb(res);
    });
  },

  updateOne:function (burgerId,cb){
    orm.updateOne("burgers","devoured",burgerId,function(res){
      cb(res);
    } )
  }
};



module.exports=burger;