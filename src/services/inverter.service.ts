import { baseUrl } from "../constants/routes";
export const panelsUrl =  baseUrl + "api/inverters";

const getInverters = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { getInverters };
