import { useState, useEffect, useRef } from "react";
import axios from "axios";

//@ts-ignore
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

// ex: useAxios(url,{method:"GET",data:payload})
const useAxios = (url: string) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async (headers?: any) => {
    try {
      let header: object = {
        ...headers,
        url,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const result = await axios.request(header);
      setResponse(result.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setloading(false);
    }
  };

  return { response, error, loading, fetchData };
};

export default useAxios;
