import QRCode from 'qrcode'
import React, {useState} from 'react';

export function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState('');
  const [qrCode, setQRCode] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const generateQRCode = () => {
    if (inputValue) {

      QRCode.toDataURL(inputValue)
        .then(url => {
          setQRCode(url);
        })
        .catch(err => {
          console.error(err)
        })
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange}/>
      <button onClick={generateQRCode}>Generate QR Code</button>
      <br />
      {qrCode && (
        <img src={qrCode} alt="QR code"/>
      )}
    </div>
  );
}
