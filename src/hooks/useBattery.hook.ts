import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { Battery } from "../interfaces/battery.interface";

import {
  panelsUrl,
  getBatteries,
} from "../services/battery.service";

const useGetEventsClient = () => {
  const { data, isLoading, error } = useSWR<Battery[]>(
    `${panelsUrl}`,
    getBatteries
  );

  /* console.log(data); */

  return { batteries: data, isLoading, error };
};

export { useGetEventsClient };
