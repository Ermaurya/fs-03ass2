import Name from './components/Name';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div>
      <div className='main p-tag'>
      <Name/>
      <Experience/>
      <Skills/>
      </div>
    </div>
  );
}

export default App;
