var socket = io();
var driverID;
// socket.on('map view', function(data) {
//   console.log('clicked');
//   // console.log(data);
//   // document.getElementById("alert").innerHTML = "button clicked";
// });

function addDriver(data){
  console.log(data.id);
  console.log(data.lat);
  console.log(data.long);
  console.log(data.available);
  driverID = data.id;
  insertNewDriverMarker(data.id, data.lat, data.long)
  console.log("test");
  socket.emit("new driver", data);
}

socket.on("new rider", function(data){
	if(data.driverID == driverID){
		console.log('got new notification');
		directionToRider(data)
	}
})
