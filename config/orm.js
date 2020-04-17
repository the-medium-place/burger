const connection = require("../config/connection");

// create array of question marks of 'num' length for use in sql query
function printQuestionMarks(arr) {
    var queArr = [];
    for (i in arr){
        queArr.push("?");
    }
    return queArr.toString();
}

// change obj to sql syntax
function objToSql(obj) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in obj) {
      var value = obj[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(obj, key)) {
       
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}




const orm = {

    all: (tableInput, callback) => {
        const queryString = `SELECT * FROM ${tableInput};`;
        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            callback(res);
        });
    },

    create: (table, columns, vals, callback) => {
     
        const numQues = printQuestionMarks(vals);
        const colStr = columns.toString();
        const queryString = `INSERT INTO ${table} (${colStr}) VALUES (${numQues})`;
        console.log(queryString);
        connection.query(queryString, vals, (err, res) => {
            if (err) throw err;

            callback(res);
        });
    },

    update: (table, objColVals, condition, callback) => {
        // const queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`
        console.log("orm conditions: " + condition)
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    

        connection.query(queryString, (err, res) => {
            if (err) throw err;
            callback(res);
        })
    }
}




module.exports = orm;