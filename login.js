function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("message");

  var correctUser = "admin";
  var correctPass = "123456";

  if (username === correctUser && password === correctPass) {
    message.style.color = "green";
    message.innerText = "Đăng nhập thành công!";
  } else {
    message.style.color = "red";
    message.innerText = "Sai username hoặc password!";
  }
}
