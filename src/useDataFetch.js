import React, { useState } from "react";
import axios from "axios";

const useDataFetch = (initialData, initialUrl) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);

  React.useEffect(() => {
    const fetchData = async function () {
      try {
        const result = await axios.get(url, {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        });
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return [{ data }, setUrl];
};

export default useDataFetch;
