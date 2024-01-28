import {useState} from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black');

  const handleClick= async()=>{
  const [tab] = await chrome.tabs.query({active: true});
  chrome.scripting.executeScript<string[], void>({
    target: {tabId: tab.id!},
    args : [color],
    func: (color ) =>{
        document.body.style.backgroundColor =  color
    }
  })
  };

  return (
    <>
      <h1>Background Color Changer</h1>
      <div className="card">
        <button onClick={handleClick} className='btn'>
          Apply Color
        </button>
        <input type='color' name="color" onChange={e=>setColor(e.currentTarget.value)} value={color} />
        <p>
         Select a color then click on the button to apply on background
        </p>
      </div>
    </>
  )
}

export default App
