import { useState, useEffect } from "react";
import axios from "axios";

// ex: useAxios(url,{method:"GET",data:payload})
const useAxios = (url: string, headers?: object) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  let header: object = {
    ...headers,
    url,
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.request(header);
        setResponse(result.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, [url, headers]);

  return { response, error, loading };
};

export default useAxios;
