const API_URL = "http://localhost:5080/api/auth";

// REGISTER
async function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, passwordHash: password })
  });

  const text = await res.text();
  document.getElementById("result").innerText =
    res.ok ? text : "Error: " + text;
}

// LOGIN
async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, passwordHash: password })

  });

  const data = await res.json();
  localStorage.setItem("token", data.token);

  document.getElementById("result").innerText =
    "Login success! JWT saved.";
}

// CALL PROTECTED API
async function callProtected() {
  const token = localStorage.getItem("token");

  console.log("TOKEN:", token);

  const res = await fetch(`${API_URL}/me`, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  });

  console.log("STATUS:", res.status);

  const text = await res.text();
  console.log("RESPONSE:", text);

  document.getElementById("result").innerText = text;
}



// LOGOUT
function logout() {
  localStorage.removeItem("token");
  alert("Logged out");
}

