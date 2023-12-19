export function handleChangeInput (e, dataSetter){
    const {name, value} = e.target;
    dataSetter((prevFormatData)=>({
      ...prevFormatData,
      [name]: value,
    }))
  }
  
  export function handleSubmit(e, inputData, submitAction){
    e.preventDefault();
    submitAction(inputData)
    console.log(inputData, 'here are form datas');
  }