
const users = [];


document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();


  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create a user object
  const newUser = {
    name: name,
    email: email,
    password: password,
  };

  // Add the user object to the array
  users.push(newUser);

  // Clear the form
  this.reset();

  // Update the user list display
  displayUsers();
});


function displayUsers() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach((user, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1} Name: ${user.name}, Email: ${user.email}`;
    userList.appendChild(listItem);
  });
}
