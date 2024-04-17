import { useEffect, useState } from "react";
import axios from "axios";
export const useFetch = () => {
  const [data, setData] = useState({});
  const url = "https://pokeapi.co/api/v2/ability/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return { data };
};
