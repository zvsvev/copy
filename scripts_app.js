document.getElementById("pasteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const content = document.getElementById("pasteContent").value;
  if (!content) {
    alert("Belum ada yg mau dipaste bang");
    return;
  }

  // Send to backend server
  fetch('https://copy-backend-88oj.onrender.com/api/paste', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: content })
  })
  .then(response => response.json())
  .then(data => {
    // Assuming backend responds with { url: "..." }
    const pasteLink = data.url;

    // Display the generated link
    const linkElement = document.getElementById("pasteLink");
    linkElement.innerHTML = `
      <p>Copasnya udh jadi bang: <a href="${pasteLink}" target="_blank">${pasteLink}</a></p>
    `;

    // Optionally, clear the textarea
    document.getElementById("pasteContent").value = "";
  })
  .catch(error => {
    console.error('Error saving paste:', error);
    alert('Gagal upload paste, coba lagi bang.');
  });

});
