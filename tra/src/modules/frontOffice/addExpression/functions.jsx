export function handleChangeInput (e, dataSetter){
    const {name, value} = e.target;
    dataSetter((prevFormatData)=>({
      ...prevFormatData,
      [name]: value,
    }))
  }
  
  export function handleSubmit(e, inputData){
    e.preventDefault();
    console.log(inputData, 'here are form datas');
  }