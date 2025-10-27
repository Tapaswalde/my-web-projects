const qrContainer = document.getElementById("qrcode");
const generateBtn = document.getElementById("generate");
const downloadBtn = document.getElementById("download");
const copyBtn = document.getElementById("copy");
const themeToggle = document.getElementById("themeToggle");
const textInput = document.getElementById("text");

let qrCode;

generateBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  qrContainer.innerHTML = "";

  if (text === "") {
    alert("Please enter text or URL to generate QR code.");
    return;
  }

  qrCode = new QRCode(qrContainer, {
    text,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });

  qrContainer.classList.remove("fade-in");
  setTimeout(() => qrContainer.classList.add("fade-in"), 10);
});

downloadBtn.addEventListener("click", () => {
  const img = qrContainer.querySelector("img") || qrContainer.querySelector("canvas");
  if (!img) {
    alert("Please generate a QR code first.");
    return;
  }
  const link = document.createElement("a");
  link.href = img.src || img.toDataURL("image/png");
  link.download = "qr-code.png";
  link.click();
});

copyBtn.addEventListener("click", async () => {
  const text = textInput.value.trim();
  if (!text) {
    alert("Nothing to copy!");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  } catch {
    alert("Failed to copy text.");
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});
