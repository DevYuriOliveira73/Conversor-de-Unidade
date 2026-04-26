import {useState, useEffect} from 'react'

import {getWeightParams} from '../services/weight/weightService'
import {type Category}  from '../type/category';
import { type ISelectOption } from '../type/selectOption';



function useUnitConverter() {

  const [activeTab, setActiveTab] = useState<Category>("length");
  const [selectOptions, setSelectOptions] = useState<ISelectOption[]>([]);


  const [formData, setFormData] = useState({
    value: 0,
    unitFrom: "",
    unitTo: "",
  });

  useEffect(() => {
  console.log(selectOptions);
  }, [selectOptions]);

  useEffect(() => {
  const fetchSelectOptions = async () => {
    try {
      const { data: params } = await getWeightParams(activeTab);

      const optionValues = Object.keys(params);
      const optionLabels: string[] = Object.values(params);

      const options : ISelectOption[] = optionValues.map((value, index) => {
        return {
          value,
          label: optionLabels[index],
        };
      });

      setSelectOptions(options);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  fetchSelectOptions();
}, [activeTab]);


  const onHandleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log(e)
    const { name, value } = e.target;

    
    setFormData((prev) => ({
      ...prev,
      [name]: (name === "value" ? Number(value) : value),
    }));
  };


  const tabs: { label: string; value: Category }[] = [
    { label: "Length", value: "length" },
    { label: "Weight", value: "weight" },
    { label: "Temperature", value: "temperature" },
  ];

  return {
    activeTab,
    setActiveTab,
    tabs,
    formData, 
    setFormData,
    onHandleInput,

    
    selectOptions
  }
}

export default useUnitConverter