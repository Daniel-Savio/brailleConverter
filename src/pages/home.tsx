import { useState } from 'react';
import jsPDF from 'jspdf';
import { font } from '../components/BraileFont';
export function Home() {
  const [braille, setBraille] = useState<string>('');
  const [plainText, setPlainText] = useState<string>('Plate');
  const [textSize, setTextSize] = useState<string>('18');
  const [Xlenght, setXlength] = useState<string>('16');
  const [Ylenght, setYlenght] = useState<string>('8');
  const [bgColor, setBgColor] = useState<string>('rgb(203, 213, 225)');
  const [fontColor, setFontColor] = useState<string>('rgb(17, 17, 17)');


  console.log(fontColor);

  // Contadores
  const [number, setNumber] = useState<number>(0);
  const [upper, setUpper] = useState<number>(0);
  const [spaces, setSpaces] = useState<number>(0);

  // ? PDF Handler ? //
  const handleGeneratePdf = () => {
    const xCenter = parseInt(Xlenght) / 2;
    const yCenter = parseInt(Ylenght) / 2;

    const doc = new jsPDF({
      unit: 'cm',
      orientation: 'l',
      format: [parseInt(Xlenght), parseInt(Ylenght)],
    });

    // adiciona a fonte Braille ao documento
    doc.addFileToVFS('Braile.ttf', font);
    doc.addFont('Braile.ttf', 'Braile', 'normal');


    //background color
    doc.setFillColor(bgColor);
    doc.rect(0, 0, parseInt(Xlenght), parseInt(Ylenght), "F");

    doc.setFont('helvetica');
    doc.setFontSize(parseInt(textSize));
    doc.setTextColor(fontColor);
    doc.text(plainText, xCenter, yCenter - 1, {align: 'center'});

    doc.setFont('Braile');
    doc.setTextColor(4, 4, 4);
    doc.setFontSize(42.68);
    doc.text(braille, xCenter, yCenter + 1, {align: 'center'});

    doc.save(plainText);
  };

  // ? $ Text Handler ?
  function handleText(text: string) {
    const brailleArray: any = [];
    setPlainText(text);


    const uppercaseRegex = /[A-Z]/g;
    const uppercaseLetters = text.match(uppercaseRegex);
    setUpper(uppercaseLetters ? uppercaseLetters.length : 0);
    const upperQtd = uppercaseLetters ? uppercaseLetters.length : 0;

    const numberRegex = /[0-9]/g;
    const numberCharacter = text.match(numberRegex);
    setNumber(numberCharacter ? numberCharacter.length : 0);
    const numberQtd = numberCharacter ? numberCharacter.length : 0;

    const blankspacesRegex = /[\s]/g;
    const numberBlankspaces = text.match(blankspacesRegex);
    setSpaces(numberBlankspaces ? numberBlankspaces.length : 0);

    if(braille.length < 20) {
      setXlength('15')
      setYlenght('8')
    }
    if(braille.length > 20 && braille.length < 26) {
      setXlength('25')
      setYlenght('8')
    }

    if(braille.length > 26 && braille.length < 40) {
      setXlength('25')
      setYlenght('18')
    }

    if(braille.length > 40) {
      setXlength('25')
      setYlenght('20')
    }

    // ? Full uppercase phrases ? //
    if (text.length === upperQtd && text.length !== 0) {
      brailleArray.push('AA');
      for (let i = 0; i < text.length; i++) {
        const letter = text.charAt(i);
        brailleArray.push(letter.toLowerCase());
      }
      setBraille(brailleArray.toString().replaceAll(',', '')
      .replaceAll('1°', 'Q')
      .replaceAll('2°', 'W')
      .replaceAll('3°', 'E')
      .replaceAll('4°', 'R')
      .replaceAll('5°', 'T')
      .replaceAll('6°', 'Y')
      .replaceAll('7°', 'U')
      .replaceAll('8°', 'I')
      .replaceAll('9°', 'O')
      .replaceAll('0°', 'P')
);
      return;

      
    }
    // ? Each upper case letter ? //
    if (upperQtd !== 0 && upperQtd !== text.length) {
      for (let i = 0; i < text.length; i++) {
        const letter = text.charAt(i);
        if (letter === letter.toUpperCase() && letter !== ' ') {
          brailleArray.push('A' + letter.toLowerCase());
        } else {
          brailleArray.push(letter);
        }
      }
      setBraille(brailleArray.toString().replaceAll(',', '')
      .replaceAll('1°', 'Q')
      .replaceAll('2°', 'W')
      .replaceAll('3°', 'E')
      .replaceAll('4°', 'R')
      .replaceAll('5°', 'T')
      .replaceAll('6°', 'Y')
      .replaceAll('7°', 'U')
      .replaceAll('8°', 'I')
      .replaceAll('9°', 'O')
      .replaceAll('0°', 'P')
);
      return;
    }

    // ? All numbers phrases ? //
    if (text.length === numberQtd && text.length !== 0) {
      brailleArray.push('B');
    }

    brailleArray.push(text);
    setBraille(brailleArray.toString().replaceAll(',', '')
                             .replaceAll('1°', 'Q')
                             .replaceAll('2°', 'W')
                             .replaceAll('3°', 'E')
                             .replaceAll('4°', 'R')
                             .replaceAll('5°', 'T')
                             .replaceAll('6°', 'Y')
                             .replaceAll('7°', 'U')
                             .replaceAll('8°', 'I')
                             .replaceAll('9°', 'O')
                             .replaceAll('0°', 'P')
    );
  }

  // ? HTML ? //
  return (
    <div id="home" className="p-4 h-fit w-full bg-gray-100 dark:bg-slate-700">
      <div id="home-content">
        <main className="flex flex-col items-center justify-center">
          {/* Header */}
          <header className=" w-full ">
            <h1 className="text-3xl font-bold text-center dark:text-slate-50">
              Placa em Braile
            </h1>
          </header>

          <br />

          {/* Plate */}
          <div
            style={{
              width: `${Xlenght}cm`,
              height: `${Ylenght}cm`,
              backgroundColor: bgColor,
            }}
            className="flex flex-col items-center justify-center drop-shadow-lg"
          >
            {/* Normal Text input */}
            <input
              style={{ color: fontColor, fontSize: `${textSize}px` }}
              className="text-2xl rounded-lg text-center w-full focus:outline-none bg-transparent block"
              type="text"
              name="text"
              id="text"
              placeholder="text"
              onChange={(e) => {
                handleText(e.target.value);
              }}
            />
            <br />

            {/* Braile */}
            <span
              style={{ fontSize: `15mm` }}
              className="leading-[5rem] m-4 break-all font-secondary text-center"
            >
              {' '}
              {braille}
            </span>
          </div>

          <br />

          {/* Tool Bar */}
          <div className="flex flex-col gap-2 dark:text-slate-50" id="tools">
            {/* Buttons */}
            <div className="flex justify-center" id="buttons">
              <button
                onClick={() => handleGeneratePdf()}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Baixar PDF
              </button>
            </div>

            {/* Tools */}
            <div className="mt-4 flex gap-8 justify-center" id="editing">
              {/* Fontsize slider */}
              <div id="tool-font-size">
                <label className="block text-center text-sm font-medium mb-3 ">
                  Tamanho da fonte
                </label>
                <div className="flex flex-row gap-4 align-middle">
                  <input
                    type="number"
                    inputMode="numeric"
                    maxLength={3}
                    className="appearance-none bg-blue-400 font-bold p-1 focus:outline-none w-12 text-center rounded-md text-slate-100"
                    onChange={(e) => {
                      setTextSize(e.target.value);
                    }}
                    value={textSize}
                  />
                  <input
                    type="range"
                    className="m-auto text-blue-600 appearance-none bg-blue-200 h-2 rounded-lg"
                    min={16}
                    step={1}
                    max={112}
                    value={textSize}
                    onChange={(e) => {
                      setTextSize(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Background color*/}
              <div id="tool-bg-color">
                <label className="block text-center text-sm font-medium mb-3 ">
                  Cor de fundo
                </label>
                <input
                  className="cursor-pointer center text-center"
                  type="color"
                  name="color"
                  id="color"
                  value={bgColor}
                  onChange={(e) => {
                    setBgColor(e.target.value);
                  }}
                />
              </div>

              {/* Font color */}
              <div id="tool-font-color">
                <label className="block text-center text-sm font-medium mb-3 ">
                  Cor da fonte
                </label>
                <input
                  className="cursor-pointer center text-center"
                  type="color"
                  name="color"
                  id="color"
                  value={fontColor}
                  onChange={(e) => {
                    setFontColor(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="mt-4 flex gap-8 justify-between" id="editing">
              {/* X slider */}
              <div id="x-plate-size">
                <label className="block text-center text-sm font-medium mb-3 ">
                  Tamanho do Quadro em X
                </label>
                <div className="flex flex-row gap-4 align-middle">
                  <input
                    type="number"
                    inputMode="numeric"
                    maxLength={3}
                    className="appearance-none bg-blue-400 font-bold focus:outline-none w-12 text-center rounded-md text-slate-100"
                    onChange={(e) => {
                      setXlength(e.target.value);
                    }}
                    value={Xlenght}
                  />
                  <input
                    type="range"
                    className="m-auto text-blue-600 appearance-none bg-blue-200 h-2 rounded-lg"
                    min={16}
                    step={1}
                    max={200}
                    onChange={(e) => {
                      setXlength(e.target.value);
                    }}
                    value={Xlenght}
                  />
                </div>
              </div>

              {/* Y slider */}
              <div id="y-plate-size">
                <label className="block text-center text-sm font-medium mb-3 ">
                  Tamanho do Quadro em Y
                </label>
                <div className="flex flex-row gap-4 align-middle">
                  <input
                    type="number"
                    inputMode="numeric"
                    maxLength={3}
                    className="appearance-none bg-blue-400 font-bold focus:outline-none w-12 text-center rounded-md text-slate-100"
                    onChange={(e) => {
                      setYlenght(e.target.value);
                    }}
                    value={Ylenght}
                  />
                  <input
                    type="range"
                    className="m-auto text-blue-600 appearance-none bg-blue-200 h-2 rounded-lg"
                    min={8}
                    step={1}
                    max={200}
                    onChange={(e) => {
                      setYlenght(e.target.value);
                    }}
                    value={Ylenght}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-8 justify-between" id="editing">
              {/* Counters */}
              <div id="counters">
                <h2 className="block text-center text-sm font-medium mb-3 ">
                  Contadores
                </h2>
                <div className="flex flex-row gap-4 align-middle">
                  {/* Number counter display */}
                  <span className="text-center">
                    {' '}
                    Números{' '}
                    <b className="bg-blue-400 font-bold rounded-md p-1 text-slate-100">
                      {number}
                    </b>{' '}
                  </span>
                  {/* Uppercase counter display*/}
                  <span className="text-center">
                    {' '}
                    Maiúsculas{' '}
                    <b className="bg-blue-400 font-bold rounded-md p-1 text-slate-100">
                      {upper}
                    </b>{' '}
                  </span>
                  {/* Blanck spaces counter display */}
                  <span className="text-center">
                    {' '}
                    Espaços{' '}
                    <b className="bg-blue-400 font-bold rounded-md p-1 text-slate-100">
                      {spaces}
                    </b>{' '}
                  </span>
                  {/* All carachters counter display */}
                  <span className="text-center">
                    {' '}
                    Total{' '}
                    <b className="bg-blue-400 font-bold rounded-md p-1 text-slate-100">
                      {braille.length}
                    </b>{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <br />
        </main>
      </div>
    </div>
  );
}
