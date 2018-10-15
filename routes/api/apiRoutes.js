// import list data
const tableData = require("../../data/reservationData");

// create and export API routes
module.exports = function(app) {

  // create GET route to send back tableData as JSON
  app.get("/api/reservations", function(req, res) {
    res.json(tableData);
  });

  // create POST route to receive data from our front end and add it to our tableData
  app.post("/api/reservations", function(req, res) {

    // grab sent information (gets stored in req.body);
    const newReservation = req.body;

    // add to our list of table reservations
    tableData.push(newReservation);

    const reservationNumber = tableData.length;

    // send back information for user to know if they are on the waiting list or not
    res.json({
      reservationNumber: reservationNumber,
      waitingList: (reservationNumber < 5) ? false : true
    });
    
  });

}