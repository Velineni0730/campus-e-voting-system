auth.onAuthStateChanged(async (user) => {
  if (user) {
    window.location.href = "index.html";
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const admissionNumber = document.getElementById('email').value.trim();
  const email = admissionNumber + '@gitam.in';
  const password = document.getElementById('password').value.trim();

  try {
    const userCred = await auth.signInWithEmailAndPassword(email, password);
    window.location.href = "index.html";
  } catch (err) {
    errorMsg.textContent = "Login failed: " + err.message;
  }
});
const googleLoginBtn = document.getElementById('googleLoginBtn');

googleLoginBtn.addEventListener('click', async () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  try {
    const result = await auth.signInWithPopup(provider);
    const user = result.user;

    // Check if user already exists in Firestore
    const userDoc = await db.collection('users').doc(user.uid).get();
    if (!userDoc.exists) {
      await db.collection('users').doc(user.uid).set({
        name: user.displayName,
        email: user.email,
        role: 'voter',
        registeredAt: new Date()
      });
    }

    window.location.href = "index.html";
  } catch (err) {
    errorMsg.textContent = "Google login failed: " + err.message;
  }
});