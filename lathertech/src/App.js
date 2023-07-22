import NewComponent from './newComponent';
import Rotate from './rotateArea';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen h-[200vh]">

        <NewComponent/>
        <div className="pt-96"><Rotate/></div>
        
    </div>
  );
}

export default App;
