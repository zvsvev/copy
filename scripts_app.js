document.getElementById("pasteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const content = document.getElementById("pasteContent").value;
  if (!content) {
    alert("Belum ada yg mau dipaste bang");
    return;
  }

  fetch('https://copy-backend-88oj.onrender.com/api/paste', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: content })
  })
  .then(response => response.json())
  .then(data => {
    if (data.url) {
      const linkElement = document.getElementById("pasteLink");
      linkElement.innerHTML = `
        <p>Copasnya udh jadi bang: <a href="${data.url}" target="_blank">${data.url}</a></p>
      `;
      document.getElementById("pasteContent").value = "";
    } else {
      alert('Server tidak mengembalikan link.');
    }
  })
  .catch(error => {
    console.error('Error saat fetch:', error);
    alert('Gagal konek ke server.');
  });
});
