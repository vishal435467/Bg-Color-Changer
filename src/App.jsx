
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#ddd");

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl cursor-pointer'>
          <button onClick={()=> setColor("red")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "red"}}>Red
          </button>
          <button onClick={()=> setColor("#BFC0C0")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "#BFC0C0"}}>Silver
          </button>
          <button onClick={()=> setColor("#EF8354")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "#EF8354"}}>Coral
          </button>
          <button onClick={()=> setColor("#4F5D75")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "#4F5D75"}}>Payne's gray
          </button>
          <button onClick={()=> setColor("#89043D")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "#89043D"}}>Carlet
          </button>
          <button onClick={()=> setColor("#FE5F55")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "#FE5F55"}}>Bittersweet
          </button>
          <button onClick={()=> setColor("#273469")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "#273469"}}>Delft Blue
          </button>
          <button onClick={()=> setColor("#1E2749")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "#1E2749"}}>Space cadet
          </button>
          <button onClick={()=> setColor("#739E82")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "#739E82"}}>Cambridge blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
