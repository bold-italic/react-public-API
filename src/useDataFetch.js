import React, { useState } from "react";
import axios from "axios";

const useDataFetch = (initialData, initialUrl) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);

  React.useEffect(() => {
    const fetchData = async function () {
      const result = await axios(url);
      setData(result.data);
    };
    fetchData();
  }, [url]);

  return [{ data }, setUrl];
};

export default useDataFetch;
