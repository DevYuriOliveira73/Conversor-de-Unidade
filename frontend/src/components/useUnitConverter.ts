import {useState, useEffect} from 'react'

import {getSupportedUnits} from '../services/unitService'
import {type Category}  from '../type/category';
import { type ISelectOption } from '../type/selectOption';
import {calculateConversion} from '../services/conversionService'
import { type IcalculateConversion } from "../type/calculateConversion";



function useUnitConverter() {

  const [activeTab, setActiveTab] = useState<Category>("length");
  const [selectOptions, setSelectOptions] = useState<ISelectOption[]>([]);

  const [formData, setFormData] = useState({
    value: "",
    unitFrom: "",
    unitTo: "",
  });

  useEffect(() => {
    console.log(selectOptions);
    console.log(formData)

  }, [selectOptions, formData]);


  useEffect(() => {
  const fetchSelectOptions = async () => {
    try {
      const { data: params } = await getSupportedUnits(activeTab);

      const optionValues = Object.keys(params);
      const optionLabels: string[] = Object.values(params);

      const options : ISelectOption[] = optionValues.map((value, index) => {
        return {
          value,
          label: optionLabels[index],
        };
      });

      setFormData((prev) => ({
        ...prev,
        unitFrom :optionValues[0],
        unitTo : optionValues[0]
        
      }));
      console.log(`NAO ERA PRA FUNCIONAR`)

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
      [name]:  value,
    }));
  };

  const handleConvert = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData)

    const conteudo : IcalculateConversion = {
      valor: formData.value,
      unit_from: formData.unitFrom,
      unit_to: formData.unitTo, 
      unit :activeTab
    }

    const response = await calculateConversion(conteudo)

    console.log(response)
  }

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

    
    selectOptions,
    handleConvert
  }
}

export default useUnitConverter