import { useState } from "react"

//CustumHook para manejar los campos de un formulario
//Cada propiedad es un campo de texto o un selector que quiero manipular

export const useForm = ( initialState = {} ) => {
  
     const [values, setValues] = useState(initialState) ; 

     //Resetea los camos del formulario 
     const reset = ( ) => {
        setValues( initialState );
    }

     //Modifica el valor de cada capo
     const handleInputChange = ( {target} )=>{

        setValues({
            ...values,
            [target.name]: target.value
        });

     }

     return [values, handleInputChange, reset];
}
