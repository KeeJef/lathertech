import Rotate from "./rotateArea";

function App() {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="border-2 border-black w-4/6 p-2 text-center text-4xl font-bebas">
        LATHERTECH INC
      </div>
      <div className=" border-x-2 border-black w-4/6">
        <div className="flex border-b-2 border-double border-slate-600">
          <div className="flex flex-col justify-between flex-grow border-r-2 border-double border-slate-600 font-mono p-4 w-1/3">
            <div className="text-xl font-bold pb-5 italic">
              Litsea & Peppermint
            </div>
            <div className="text-xl font-light">
              Litsea & Peppermint soap combines the cleansing properties of
              Litsea with the exfoliating benefits of peppermint flakes. It
              provides a thorough clean, removes dead skin cells, and leaves
              skin refreshed. This soap uses natural ingredients, is suitable
              for all skin types, and is ideal for daily use.
            </div>
            <div className="items-end">
              ingredients: coconut oil, olive oil, peppermint leaves, litsea
              oil, iron oxide
            </div>
          </div>
          <div className="flex justify-end p-2">
            <Rotate />
          </div>
        </div>
        <div className="flex border-b-2 border-double border-slate-600">
          <div className="flex flex-col justify-between flex-grow border-r-2 border-double border-slate-600 font-mono p-4 w-1/3">
            <div className="text-xl font-bold pb-5 italic	">
              Charcoal & Grapefruit
            </div>
            <div className="text-xl font-light">
              Charcoal & Orange soap combines activated charcoal's deep cleaning
              and exfoliating properties with the refreshing scent of orange. It
              effectively removes impurities and dead skin cells. This soap,
              made with natural ingredients, is suitable for all skin types and
              daily use.
            </div>
            <div className="items-end">
              ingredients: coconut oil, olive oil, activated charcoal,
              grapefruit oil
            </div>
          </div>
          <div className="flex justify-end p-2">
            <Rotate />
          </div>
        </div>
        <div className="flex border-b-2 border-double border-slate-600">
          <div className="flex flex-col justify-between flex-grow border-r-2 border-double border-slate-600 font-mono p-4 w-1/3">
            <div className="flex text-xl font-bold pb-5 italic">
              Rosemary & Charcoal
            </div>
            <div className="flex text-xl font-light">
              Rosemary & Charcoal soap provides a deep cleanse by leveraging
              activated charcoal's ability to absorb toxins and impurities from
              the skin. The addition of rosemary, known for its antibacterial
              properties and rich antioxidants, helps improve skin complexion
              and promotes healing. This natural soap can be used daily and is
              suitable for all skin types.
            </div>
            <div className="items-end">
              ingredients: coconut oil, olive oil, activated charcoal, rosemary
              oil
            </div>
          </div>
          <div className="p-2">
            <Rotate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
