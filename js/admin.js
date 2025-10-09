// Create Election
const createElectionForm = document.getElementById('createElectionForm');
createElectionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('electionTitle').value;
  const startDate = new Date(document.getElementById('startDate').value);
  const endDate = new Date(document.getElementById('endDate').value);
  db.collection("elections").add({ title, startDate, endDate, adminID: auth.currentUser.uid })
    .then(() => alert("Election created!"))
    .catch(err => alert(err.message));
});

// Create Position
const createPositionForm = document.getElementById('createPositionForm');
createPositionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('positionTitle').value;
  const electionID = document.getElementById('positionElectionId').value;
  db.collection("positions").add({ title, electionID })
    .then(() => alert("Position added!"))
    .catch(err => alert(err.message));
});

// Add Candidate
const createCandidateForm = document.getElementById('createCandidateForm');
createCandidateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('candidateName').value;
  const positionID = document.getElementById('candidatePositionId').value;
  const electionID = document.getElementById('candidateElectionId').value;
  db.collection("candidates").add({ name, positionID, electionID })
    .then(() => alert("Candidate added!"))
    .catch(err => alert(err.message));
});