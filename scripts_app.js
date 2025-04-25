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
  try {
    localStorage.setItem(`paste_${pasteId}`, content);
  } catch (error) {
    console.error("Error saving to localStorage:", error);
    alert("Failed to save your paste. Please check your browser settings.");
    return;
  }

  // Generate the paste link in the desired format
  const pasteLink = `${window.location.origin}/${pasteId}`;

  // Display the generated link
  const linkElement = document.getElementById("pasteLink");
  linkElement.innerHTML = `
    <p>Copasnya udh jadi bang: <a href="${pasteLink}" target="_blank">${pasteLink}</a></p>
  `;

  // Optionally, clear the textarea
  document.getElementById("pasteContent").value = "";
});
