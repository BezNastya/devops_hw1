// var dbConn = require('./connect');
//
// var ReceiverInf = function(receiverInf){
//     this.firstName = receiverInf.firstName;
//     this.lastName = receiverInf.lastName;
//     this.secondName = !receiverInf.secondName ? "" : receiverInf.secondName;
//     this.email = receiverInf.email;
// };
//
// ReceiverInf.create = function (receiverInf, result) {
//     dbConn.query("INSERT INTO receiver SET first_name=?, last_name=?, second_name=?, email=?",
//         [receiverInf.firstName, receiverInf.lastName, receiverInf.secondName, receiverInf.email], function (err, res) {
//         if(err) {
//             console.log("Error during creation of receiver: ", err);
//             result(err, null);
//         }
//         else{
//             console.log("Created receiver with id: " + res.insertId);
//             result(null, res.insertId);
//         }
//     });
// };
//
// ReceiverInf.findById = function (id, result) {
//     dbConn.query("Select * from receiver where id = ? ", id, function (err, res) {
//         if(err) {
//             console.log("Error during getting of receiver: ", err);
//             result(err, null);
//         }
//         else{
//             result(null, res);
//         }
//     });
// };
// ReceiverInf.findAll = function (result) {
//     dbConn.query("Select * from receiver", function (err, res) {
//         if(err) {
//             console.log("Error during getting all of receiver: ", err);
//             result(null, err);
//         }
//         else{
//             result(null, res);
//         }
//     });
// };
//
// ReceiverInf.update = function(id, receiverInf, result){
//     dbConn.query("UPDATE receiver SET first_name=?, last_name=?, second_name=?, email=? WHERE id = ?",
//         [receiverInf.firstName, receiverInf.lastName, receiverInf.secondName, receiverInf.email, id],
//         function (err, res) {
//         if(err) {
//             console.log("Error during updating of receiver: ", err);
//             result(null, err);
//         }else{
//             result(null, res);
//         }
//     });
// };
//
// ReceiverInf.delete = function(id, result){
//     dbConn.query("DELETE FROM receiver WHERE id = ?", [id], function (err, res) {
//         if(err) {
//             console.log("Error during deletion of receiver: ", err);
//             result(null, err);
//         }
//         else{
//             result(null, res);
//         }
//     });
// };
// module.exports= ReceiverInf;