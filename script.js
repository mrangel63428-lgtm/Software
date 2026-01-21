let qrCode;

function generarQR() {
  const texto = document.getElementById("texto").value.trim();
  const qrDiv = document.getElementById("qr");

  if (!texto) {
    alert("Por favor, escribe algo.");
    return;
  }

  qrDiv.innerHTML = ""; // Limpiar QR anterior

  qrCode = new QRCode(qrDiv, {
    text: texto,
    width: 200,
    height: 200,
  });
}