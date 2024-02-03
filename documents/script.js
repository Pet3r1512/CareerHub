function copyToClipboard() {
  /* Get the text to copy */
  var textToCopy = "Hello, world! This is the text you want to copy.";

  /* Create a temporary textarea element */
  var textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  /* Select the text within the textarea */
  textarea.select();

  try {
    /* Use the Clipboard API to copy the text to the clipboard */
    navigator.clipboard
      .writeText(textToCopy)
      .then(function () {
        alert("Text copied to clipboard!");
      })
      .catch(function (err) {
        console.error("Unable to copy to clipboard", err);
        alert("Failed to copy text to clipboard.");
      });
  } finally {
    /* Remove the temporary textarea */
    document.body.removeChild(textarea);
  }
}
