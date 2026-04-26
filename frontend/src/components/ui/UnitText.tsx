interface IUnitText {
  activeTab : string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function UnitText ({activeTab, value, onChange} : IUnitText) {

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-500">Enter the {activeTab} to Convert</label>
      <input
        type="text"
        className="border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value= {value}
        name="value"
        onChange={onChange}
        placeholder="Enter the value"
      />
    </div>
  )
}

export default UnitText;