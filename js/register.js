// js/register.js

const registerForm = document.getElementById('registerForm');
const errorMessage = document.getElementById('error-message');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCred = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCred.user;

    await db.collection('voters').doc(user.uid).set({
      name,
      email,
      role: 'voter',
      registeredAt: new Date()
    });

    alert('Registration successful! Please log in.');
    // This is the corrected redirect
    window.location.href = 'login.html';
    
  } catch (err) {
    errorMessage.textContent = 'Registration failed: ' + err.message;
    errorMessage.style.display = 'block';
  }
});