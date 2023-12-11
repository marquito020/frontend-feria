import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { Inverter } from "../interfaces/inverter.interface";

import {
  panelsUrl,
  getInverters,
} from "../services/inverter.service";

const useGetInverters = () => {
  const { data, isLoading, error } = useSWR<Inverter[]>(
    `${panelsUrl}`,
    getInverters
  );

  /* console.log(data); */

  return { inverters: data, isLoading, error };
};

export { useGetInverters };
