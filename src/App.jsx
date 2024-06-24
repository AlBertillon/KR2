import { useState } from 'react'
import './App.css'

function App() {
  const [selectedFiles, setSelectedFiles] = useState(null)

  const handleChange = (e) => {
    e.preventDefault();

    setSelectedFiles(e.target.files);
  }

  const submitVideo = async () => {
    const formData = new FormData();
    
    formData.append('video', selectedFiles[0]);

    await fetch('url', {
      method: 'POST',
      body: formData,
    })
  }

  return (
    <div>
      <input type='file' onChange={handleChange} />
      {selectedFiles && <div>Файл Выбран</div>}
      <button onClick={submitVideo}>Отправить файл</button>
    </div>
  )
}

export default App
