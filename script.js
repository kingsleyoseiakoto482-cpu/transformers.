
document.addEventListener("DOMContentLoaded", () => {
  const downloadLink = document.querySelector(
    '.download-section a[download]'
  );

  const note = document.getElementById("download-note");

  // Change to true only after placing the real ZIP
  // inside the downloads folder.
  const gamePackageReady = false;

  if (gamePackageReady && note) {
    note.textContent = "Download package is available.";
  }

  if (downloadLink) {
    downloadLink.addEventListener("click", (event) => {
      if (!gamePackageReady) {
        event.preventDefault();

        if (note) {
          note.textContent =
            "The game package has not been uploaded yet. " +
            "Add your tested game ZIP to the downloads folder.";
        }

        note?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    });
  }

  console.log("Klinical Games website initialized.");
});
