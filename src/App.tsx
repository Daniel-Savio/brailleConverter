import { useState, useRef, ReactElement  } from 'react'
import { exportComponentAsPNG } from 'react-component-export-image';


function App() {
  const [text, setText] = useState<String>('Default');
  const componentRef = useRef<HTMLInputElement>(null);

  return (
    <main className=' bg-slate-50 h-screen w-screen flex flex-col items-center justify-center'>
      <h1 className="text-3xl font-bold text-center underline w-full">
        Planeta acessível
      </h1>

      <div ref={componentRef} className='flex flex-col items-center justify-center bg-slate-300 w-3/4 h-80 rounded-md drop-shadow-lg'>
        <input className='text-gray-900 text-3xl rounded-lg text-center focus:outline-none bg-transparent block  ' type="text" name="text" id="text" placeholder='text' onChange={(e) => { setText(e.target.value) }} />
        <br />
        <br />
        <span className='text-5xl'> {text}</span>
      </div>

      <button 
      onClick={(e) => {exportComponentAsPNG(componentRef)}}
      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
        Baixar PDF
      </button>

    </main>
  )
}

export default App
