import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'tailwindcss/tailwind.css';
import { Home } from './pages/home';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Background } from './components/backgorund';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div
      className={`${darkMode ? 'dark' : ''} 
                flex flex-col  h-screen `}
    >
      <Background></Background>

      <header id='title-bar' className="flex justify-between pl-4 pr-4 pt-1 pb-1 items-center bg-sky-700 dark:bg-sky-950">
        
        <div className="flex items-center ">
          <h1 className="text-lg font-bold text-slate-50 text-treetech-50">
            
            Placas Braile
            
          </h1>
        </div>

        <div id='header-tools' className="flex items-center gap-2 ">

          
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={`${
              darkMode ? 'bg-blue-600' : 'bg-gray-300'
            } relative inline-flex h-4 w-9 items-center rounded-full mr-2`}
          >
            <span
              className={`${
                darkMode ? 'translate-x-5' : 'translate-x-1'
              } inline-block h-3 w-3 transform rounded-full bg-white transition`}
            />
          </Switch>

        </div>

      </header>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
