var connection = require("../config/connection.js");

//Prints question mark to use for mysql queries
function printQuestionMarks(num) {
  var array = [];

  for (var i = 0; i < num; i++) {
    array.push("?");
  }

  return array.toString();
}

function objToSql(ob) {
  var array = [];

  for (var key in ob) {
    var value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      array.push(key + "=" + value);
    }
  }
  return array.toString();
}
//Orm Object
var orm = {
  //Function that returns all table entries
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function (err, data) {
      if (err) {
        throw err;
      }

      cb(data);
    });
  },

  //Function that inserts one table entry
  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, data) {
      if (err) {
        throw err;
      }

      cb(data);
    });
  },
  //Function that updates one table entry
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    // console.log(queryString);

    connection.query(queryString, function (err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
};

module.exports = orm;
