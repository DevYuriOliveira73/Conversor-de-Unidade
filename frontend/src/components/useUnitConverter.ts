import {useState, useEffect} from 'react'

import {getWeightParams} from '../services/weight/weightService'



type Category = "length" | "weight" | "temperature";

function useUnitConverter() {

  const [formData, setFormData] = useState({
    value: 0,
    unitFrom: "",
    unitTo: "",
  });

  useEffect(() => {
  console.log(formData);
}, [formData]);

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

  const [activeTab, setActiveTab] = useState<Category>("length");

  const tabs: { label: string; value: Category }[] = [
    { label: "Length", value: "length" },
    { label: "Weight", value: "weight" },
    { label: "Temperature", value: "temperature" },
  ];

  const getParams = async (event: any) =>{
    event.preventDefault()
    try {
      
      
      const params =  await getWeightParams()
  
      console.log(params)
    } catch (error) {

      console.log("ERROR", error)

    }
  }

  return {
    activeTab,
    setActiveTab,
    tabs,
    formData, 
    setFormData,
    onHandleInput,

    getParams
  }
}

export default useUnitConverter