import SoapBox from "./soapBox";

function App() {
  return (
    <div className="flex flex-col items-center py-10 bg-[#151828] text-white">
      <div className="border-2 border-white p-2 text-center text-5xl font-bebas w-5/6 xl:w-4/6 lg:text-4xl">
        LATHERTECH INC
      </div>
      <div className="border-x-2 border-white w-5/6 xl:w-4/6">
        <SoapBox
          title="Litsea & Peppermint"
          description="Litsea & Peppermint soap combines the cleansing properties of Litsea with the exfoliating benefits of peppermint flakes. It provides a thorough clean, removes dead skin cells, and leaves skin refreshed. This soap uses natural ingredients, is suitable for all skin types, and is ideal for daily use."
          ingredients="ingredients: coconut oil, olive oil, peppermint leaves, litsea oil, iron oxide"
          folderName="litsea"
        />
        <SoapBox
          title="Charcoal & Grapefruit"
          description="Charcoal & Orange soap combines activated charcoal's deep cleaning and exfoliating properties with the refreshing scent of orange. It effectively removes impurities and dead skin cells. This soap, made with natural ingredients, is suitable for all skin types and daily use."
          ingredients="ingredients: coconut oil, olive oil, activated charcoal, grapefruit oil"
          folderName="charcoal"
        />
        <SoapBox
          title="Rosemary & Charcoal"
          description="Rosemary & Charcoal soap provides a deep cleanse by leveraging activated charcoal's ability to absorb toxins and impurities from the skin. The addition of rosemary, known for its antibacterial properties and rich antioxidants, helps improve skin complexion and promotes healing. This natural soap can be used daily and is suitable for all skin types."
          ingredients="ingredients: coconut oil, olive oil, activated charcoal, rosemary oil"
          folderName="rosemary"
        />
      </div>
    </div>
  );
}

export default App;
