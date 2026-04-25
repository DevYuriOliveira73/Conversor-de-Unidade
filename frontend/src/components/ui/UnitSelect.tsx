interface IUnitSelect {
  options: string[];
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function UnitSelect({options, value, onChange, name }: IUnitSelect) {

  const direction = name === "unitFrom" ? "from" : "to"

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-500">Unit to Convert {direction}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="
          border border-gray-200 rounded-lg px-3 py-2 
          text-gray-800 bg-white
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}


export default UnitSelect