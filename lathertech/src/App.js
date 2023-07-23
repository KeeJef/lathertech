import Rotate from "./rotateArea";

function App() {
  return (
    <div  className="bg-gray-900 min-h-screen h-[200vh]">
      <div id="headingBanner" className="relative flex justify-center bg-green-400 h-[26vw]">
        <div className="text-[24vw] text-white font-bebas absolute -translate-x-4 leading-none">
          LATHERTECH
        </div>
        <div className="text-[24vw] text-slate-400 font-bebas absolute leading-none">
          LATHERTECH
        </div>
      </div>

      <div className="pt-96">
        <Rotate />
      </div>
    </div>
  );
}

export default App;
