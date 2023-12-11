import { baseUrl } from "../constants/routes";
export const panelsUrl =  baseUrl + "api/batteries";

const getBatteries = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { getBatteries };
