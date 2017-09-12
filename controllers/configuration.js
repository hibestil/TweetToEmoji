var mysql = require('mysql');
var pool  = null;

// Database Configuration, Use your own things
exports.connect = function() {
  pool = mysql.createPool({
    host     : 'localhost',     // Hostname
    user     : 'root',          // Username
    password : '2460740',       // Password
    database : 'ytu'            // Database Name
  });
}

exports.get = function() {
  return pool; 
}