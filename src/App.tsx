import { useState, useRef } from 'react'
import jsPDF from 'jspdf';
import { font } from './components/BraileFont';
import './app.css';

function App() {
  const [text, setText] = useState<String>('Default');
  const [textSize, setTextSize] = useState<number | string>(64);
  const [bgColor, setBgColor] = useState<string>("#cbd5e1");
  const [fontColor, setFontColor] = useState<string>("#040404");
  const componentRef = useRef<HTMLDivElement>(null)!;

  const handleGeneratePdf = () => {

    const doc = new jsPDF({
      unit: 'px',
      orientation: 'l'

    });

    // adiciona a fonte Braille ao documento
    doc.addFileToVFS("Braile.ttf", font)
    doc.addFont("Braile.ttf", "Braile", "normal");
    doc.setFont("Braile")

    doc.html(componentRef.current!, {
      async callback(doc) {
        await doc.save('document');
      },
    });

  };



  return (

    
    <main className=' bg-slate-50 h-screen w-screen flex flex-col items-center justify-center'>

      {/* Header */}
      <header className=' w-full '>

        <img src="../../public/icon.png" alt="" className='justify-start w-16 ml-2 mt-2' />
        <h1 className="text-3xl font-bold text-center ">
          Placa em Braile
        </h1>

      </header>
      
      
      <br />

      {/* Plate */}
      <div style={{ width: "650px", height: "446px", backgroundColor: bgColor }} ref={componentRef} className='flex flex-col items-center justify-center drop-shadow-lg'>
        <input style={{color: fontColor}} className='text-2xl rounded-lg text-center focus:outline-none bg-transparent block' type="text" name="text" id="text" placeholder='text' onChange={(e) => { setText(e.target.value) }} />
        <br />
        
        <span  className="leading-[5rem] m-4 break-all font-secondary text-center" style={{ fontSize: `${textSize}px`, color: fontColor }}> {text}</span>
      </div>

      <br />

      {/* Tool Bar */}
      <div className='flex flex-col gap-2' id="tools">

        {/* Buttons */}
        <div className='flex justify-center' id="buttons">
          <button
            onClick={() => handleGeneratePdf()}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
            Baixar PDF
          </button>
        </div>

        {/* Tools */}
        <div className='mt-4 flex gap-8' id="editing">
          <div id="tool-font-size">
            <label className="block text-center text-sm font-medium mb-3 ">Tamanho da fonte em Braile</label>
            <div className='flex flex-row gap-4 align-middle'>
              <input type='number' inputMode='numeric' maxLength={3} className='appearance-none bg-blue-400 font-bold p-1 focus:outline-none w-12 text-center rounded-md text-slate-100' onChange={(e) => { setTextSize(e.target.value) }} value={textSize} />
              <input type="range" className='m-auto text-blue-600 appearance-none bg-blue-200 h-2 rounded-lg' min={16} step={4} max={112} value={textSize} onChange={(e) => { setTextSize(e.target.value) }} />
            </div>
          </div>

          {/* Background color */}
          <div id="tool-bg-color">
            <label className="block text-center text-sm font-medium mb-3 ">Cor de fundo</label>
            <input className='cursor-pointer center text-center' type="color" name="color" id="color" value={bgColor} onChange={(e) => { setBgColor(e.target.value) }} />
          </div>

          {/* Font color */}
          <div id="tool-font-color">
            <label className="block text-center text-sm font-medium mb-3 ">Cor da fonte</label>
            <input className='cursor-pointer center text-center' type="color" name="color" id="color" value={fontColor} onChange={(e) => { setFontColor(e.target.value) }} />
          </div>


        </div>
      </div>

      <br />


    </main>
  )

}

export default App
