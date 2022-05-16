import {useEffect, useState, useRef} from 'react';

export const useFetch = (url) => {

    //Mantiene la referencia cuando el hook esta vivo o el componente que lo utiliza esta montado 
    const isMounted = useRef(true); 
   
    const [state, setState] = useState( {
        data: null,
        loading: true, 
        error: null
    });

    useEffect(() => {
        return () => {
          isMounted.current = false; 
        }
     }, [])
    
    useEffect( ()=>{

        setState({
          data: null,
          loading: true,
          error: null
        });
        
        fetch(url)
            .then( resp => resp.json() )
            .then( data => {

                // setTimeout( ()=>{
                //     if(isMounted.current){
                //         setState({
                //            data,
                //            loading: false,
                //            error: null
                //         });
                //     }else{
                //         console.log('setState no se llamó')
                //     } 
                // },4000);

                if(isMounted.current){
                    setState({
                       data,
                       loading: false,
                       error: null
                    });
                }
            });

    }, [url]);
 
    return state;
}
