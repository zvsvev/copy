document.getElementById("pasteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const content = document.getElementById("pasteContent").value;
  if (!content) {
    alert("Belum ada yg mau dipaste bang");
    return;
  }

  // Generate a unique ID for the paste
  const pasteId = Date.now().toString(36);

  // Store the paste in localStorage (or integrate with an external backend)
  localStorage.setItem(`paste_${pasteId}`, content);

  // Display the link to the paste
  const pasteLink = `${window.location.origin}/paste.html?id=${pasteId}`;
  document.getElementById("pasteLink").innerHTML = `
    <p>Copasnya udh jadi bang: <a href="${pasteLink}" target="_blank">${pasteLink}</a></p>
  `;
});