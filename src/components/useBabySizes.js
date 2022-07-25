import { useState, useEffect } from "react";

const useBabySizes = () => {
  const [allBabySizes, setAllBabySizes] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/data.json");
      const sizes = await rsp.json();
      setAllBabySizes(sizes);
    };
    fetchHouses();
  }, []);

  return allBabySizes;
};

export default useBabySizes;
