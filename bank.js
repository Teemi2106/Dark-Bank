const userInfo = [
  {
    username: "Vladmir01",
    password: "vladLeader",
    page: "user1page.html",
  },
  {
    username: "worldsParent",
    password: "kingdomearth",
    page: "user2page.html",
  },
  {
    username: "Classified Matrix",
    password: "utilizethecycle",
    page: "user3page.html",
  },
];

function login(username, password) {
  for (const user of userInfo) {
    if (user.username === username && user.password === password) {
      return user.page;
    }
  }
  return null;
}

function attemptLog() {
  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;

  const targetPage = login(inputUsername, inputPassword);
  if (targetPage) {
    window.location.href = targetPage;
  } else {
    alert("Login failed");
  }
}

const passwordInput = document.getElementById("password");
const showPasswordBtn = document.getElementById("showPasswordBtn");

showPasswordIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordIcon.classList.remove("fa-eye");
    showPasswordIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    showPasswordIcon.classList.remove("fa-eye-slash");
    showPasswordIcon.classList.add("fa-eye");
  }
});
