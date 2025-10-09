// js/login.js

const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    // THIS IS THE NEW LINE: It tells Firebase to only remember the user for the current session.
    await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

    // Sign in with Firebase Auth
    await auth.signInWithEmailAndPassword(email, password);
    errorMessage.style.display = 'none';
    // Redirect is handled by the auth state change listener
  } catch (err) {
    errorMessage.textContent = 'Login failed: ' + err.message;
    errorMessage.style.display = 'block';
  }
});

// This part remains the same, it redirects to index.html after a successful login.
auth.onAuthStateChanged(user => {
  if (user) {
    window.location.href = 'index.html';
  }
});