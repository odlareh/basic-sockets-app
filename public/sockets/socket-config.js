// Enable comunication with frontend
var socket = io();
socket.on('connect', function() {
    console.log('Cliente conectado con el servidor.')
})

socket.on('disconnect', function() {
    console.log('Lo sentimos, perdimos conexión con el servidor :(')
})