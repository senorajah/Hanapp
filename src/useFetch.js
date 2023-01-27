import { useState, usettfect} from 'react' ;

const useFetch = (url) => {
  const [data, setData]  = useState(null);
  const [isPending, setIsPending] =  useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
        const abortcont = new AbortController();

        setTimeout(() =>{
            fetch(ur1, {signal: abortcont.signal})
                .then(res =>{
                    if(!res.ok){
                         throw Error('could not fetch the data for that resource');
                    }
           return res.json();
         })
         .then(data =>{
            setData(data);
            setIsPending(false);
            setError(null);
         })
          .catch(err => {
            if (err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
                setIsPending(false);
                setError(err.message);
            }
           
          })
    }, 1000);
return() => abortcont.abort();

    }, [ur1]);

    return{data, isPending, error};
  }
  
        

