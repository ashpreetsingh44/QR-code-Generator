function generateQRCode() {
    const text = document.getElementById('inputText').value;
    const qrCodeImg = document.getElementById('qrCode');
    
    if (text.trim() === "") {
        qrCodeImg.src = "";
        alert("Please enter some text");
        return;
    }
    
    // Use the requested API to generate the QR code
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
    qrCodeImg.src = qrCodeUrl;
}
