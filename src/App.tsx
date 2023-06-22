import { useState, useRef } from 'react'
import jsPDF from 'jspdf';
import { font } from './components/BraileFont';
import './app.css';


function App() {
  const [text, setText] = useState<String>('Default');
  const [fontSize, setFontSize] = useState<Number>(50);
  const componentRef = useRef<HTMLDivElement>(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      unit: 'px',
      orientation: 'landscape',
    });

    //PAREI AQUI
    // Adding the fonts.
    doc.addFileToVFS("Braile.ttf", font)
    doc.addFont("Braile.ttf", "Braile", "normal");
    doc.setFont("Braile")


    doc.html(componentRef.current!, {
      async callback(doc) {
        await doc.save('document');
      },
    });
  };

  const handleFontSize = () =>{
    
  }

  return (
    <main className=' bg-slate-50 h-screen w-screen flex flex-col items-center justify-center'>
      <h1 className="text-3xl font-bold text-center underline w-full">
        Planeta acessível
      </h1>

      <div ref={componentRef} className='flex flex-col items-center justify-center bg-slate-300 w-2/4 h-80 rounded-md drop-shadow-lg'>
        <input className='text-gray-900 text-2xl rounded-lg text-center focus:outline-none bg-transparent block  ' type="text" name="text" id="text" placeholder='text' onChange={(e) => { setText(e.target.value) }} />
        <br />
        <br />
        <span className='leading-[4rem] m-4 break-all font-secondary text-center text-5xl'> {text}</span>
      </div>
      <br />
      <div className='flex flex-col' id="tools">
        <div className='flex justify-center' id="buttons">
          <button
            onClick={() => handleGeneratePdf()}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
            Baixar PDF
          </button>
        </div>
        <div className='mt-4 flex gap-3' id="editing">
          <div id="tool-font-size">
            <label className="block text-center text-sm font-medium">Tamanho da fonte</label>
            <input type="range" className=' w-full text-blue-600 appearance-none bg-blue-200 h-2 rounded-lg' />
          </div>

          <div id="tool-bg-color">
            
          </div>

        </div>
      </div>


    </main>
  )

}

export default App
