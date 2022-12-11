import './App.css'
import { useState } from 'react'

import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

import { TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti';


function App() {
  const [link, setLink] = useState('');
  const [qrocodeLink, setQrcodeLink] = useState('');

  const linkedinUrl = 'https://www.linkedin.com/in/filipe-medeiro-3b8924180/'
  const githubUrl = 'https://github.com/FilipemedeiroDev'
 
  function handleGenerate(link) {
    QRCodeLink.toDataURL(link, {
      width: 600,
      margin: 3    
    }, (err, url) => {
      setQrcodeLink(url)
    });
  }

  function handleQrcode(e) {
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <div className="container">
      <div className='title'>
        <h1>QR <strong>Generator</strong></h1>
      </div>
      <div className='qrcode'>
        <QRCode 
          value={link}
        />
      </div>
     <input 
      className='input'
      placeholder='Digite ou cole seu link...'
      onChange={(e) => handleQrcode(e)}
     />
      <a 
      className='button-download'
      href={qrocodeLink} 
      value={link}
      download={`Qr-code.png`}
      >
      Baixar QRcode
      </a>
      <strong className='strong'>by filipemedeiroDev</strong>
      <div className='links-socialmedia'>
        <a href={linkedinUrl} target='_blank'>
          <TiSocialLinkedin 
            fontSize='34px'
          />
        </a>
        <a href={githubUrl} target='_blank'>
          <TiSocialGithub
            fontSize='44px'
          />
        </a>
      </div>
    </div>
  )
}

export default App
