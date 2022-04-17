giveupTimeout = null;
(async function () {
  const messageSender = document
    .querySelector('#messages li:last-child')
    .innerText.split(':')[0];

  if (JSON.parse(localStorage.getItem('user')).username !== messageSender) {
    if (Math.random() > 0.5) {
      socket.emit('msg', localStorage.getItem('user'));
    }
  }
  if (JSON.parse(localStorage.getItem('user')).username === messageSender) {
    giveupTimeout = setTimeout(giveup, 10000);
    socket.on('msg', onMessagePayload);
  }
})();

function onMessagePayload(data) {
  clearTimeout(giveupTimeout);
  const userData = JSON.parse(data.split(': ')[1]);
  if (userData === localStorage.getItem('user')) {
    return;
  }
  socket.off('msg', onMessagePayload);
  localStorage.setItem('oldUser', localStorage.getItem('user'));
  localStorage.setItem('user', JSON.stringify(userData));
  socket.emit('msg', `lol i am now ${userData.username}`);
  window.location.reload();
}

function giveup() {
  alert('everyone got lucky');
  socket.off('msg', onMessagePayload);
}
