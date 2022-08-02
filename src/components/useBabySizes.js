import { useState, useEffect } from "react";

const useBabySizes = () => {
  const [allBabySizes, setAllBabySizes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rsp = await fetch("/data.json");
      const sizes = await rsp.json();
      setAllBabySizes(sizes);
    };
    fetchData();
  }, []);

  return allBabySizes;
};

export default useBabySizes;
