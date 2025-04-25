document.getElementById("pasteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const content = document.getElementById("pasteContent").value;
  if (!content) {
    alert("Belum ada yg mau dipaste bang");
    return;
  }

  // Generate a unique ID for the paste
  const pasteId = Date.now().toString(36);

  // Store the paste in localStorage
  localStorage.setItem(`paste_${pasteId}`, content);

  // Generate the link to the paste
  const pasteLink = `${window.location.origin}/paste.html?id=${pasteId}`;

  // Display the link to the paste
  document.getElementById("pasteLink").innerHTML = `
    <p>Copasnya udh jadi bang: <a href="${pasteLink}" target="_blank">${pasteLink}</a></p>
  `;

  // Add the paste to the table
  addPasteToTable(pasteId, content, pasteLink);
});

// Function to add a paste to the table
function addPasteToTable(pasteId, content, pasteLink) {
  const tableBody = document.getElementById("pastesTableBody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${pasteId}</td>
    <td>${content}</td>
    <td><a href="${pasteLink}" target="_blank">${pasteLink}</a></td>
  `;

  tableBody.appendChild(newRow);
}

// Function to load all pastes from localStorage and display them in the table
function loadPastes() {
  const tableBody = document.getElementById("pastesTableBody");
  tableBody.innerHTML = ""; // Clear the table

  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("paste_")) {
      const pasteId = key.replace("paste_", "");
      const content = localStorage.getItem(key);
      const pasteLink = `${window.location.origin}/paste.html?id=${pasteId}`;

      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${pasteId}</td>
        <td>${content}</td>
        <td><a href="${pasteLink}" target="_blank">${pasteLink}</a></td>
      `;
      tableBody.appendChild(newRow);
    }
  });
}

// Load all pastes when the page loads
window.onload = loadPastes;
