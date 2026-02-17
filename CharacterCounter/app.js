let textarea = document.querySelector("textarea");
let character = document.getElementById("character");
let words = document.getElementById("words");
let sentences = document.getElementById("sentences");
const maxLength = 500;
textarea.addEventListener("input", () => {
  let text = textarea.value;

  if (text.length > maxLength) {
    text = text.slice(0, maxLength);
    textarea.value = text;
  }

  let charLength = text.length;
  let remaining = maxLength - charLength;
  character.innerText = remaining;

  character.classList.toggle("text-danger", remaining === 0);
  character.classList.toggle("text-white", remaining > 0);

  let wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  words.innerText = wordCount;

  let sentCount = text
    .split(/[.!?]+/)
    .filter((s) => s.trim().length > 0).length;
  sentences.innerText = sentCount;
});
