import UnitSelect from './ui/UnitSelect';
import UnitText from './ui/UnitText';

import useUnitConverter from './useUnitConverter'

export default function UnitConverter () {

  const {activeTab, setActiveTab, tabs, formData, onHandleInput, getParams} = useUnitConverter()

  return (
    <section className="w-screen h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Unit Converter
        </h1>

        {/* Tabs */}
        <ul className="flex gap-6 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <li
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`pb-2 cursor-pointer text-sm font-medium transition-colors
                ${
                  activeTab === tab.value
                    ? "text-blue-600 border-b-2 border-blue-600 -mb-px"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>

        {/* Form */}
        <form className="flex flex-col gap-4">
          
          <UnitText
            activeTab={activeTab}
            value={formData.value}
            onChange={onHandleInput}
            //unit={formData.unitFrom}
          />
          
          <UnitSelect  
            options={["km", "m", "cm"]}
            value= {formData.unitFrom}
            name="unitFrom"
            onChange={onHandleInput}
          />
          <UnitSelect  
            options={["km", "m", "cm"]}
            value= {formData.unitTo}
            name="unitTo"
            onChange={onHandleInput} 
          />


          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 transition-colors"
          >
            Convert
          </button>
          <button
            className='my-2 bg-sky-100'
            onClick={getParams}
          >
            Request weight
          </button>
        </form>
      </div>
    </section>
  );
}