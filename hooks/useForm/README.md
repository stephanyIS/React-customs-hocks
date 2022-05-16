# useForm Hook 


Entrada: valores iniciales de los inputs (los names deben coincidir)
```
  const initialForm = {
      name: '',
      age: 0, 
      email: ''
  }

```


Ejemplo de uso 
```
   const [values, handleInputChange, reset] = useForm( initialForm );

```
