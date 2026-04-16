function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let error = document.getElementById("error");

  if (name === "" || email === "") {
    error.style.color = "red";
    error.textContent = "Please fill all fields";
    return false;
  }

  error.style.color = "lightgreen";
  error.textContent = "Message sent successfully!";
  return false;
}