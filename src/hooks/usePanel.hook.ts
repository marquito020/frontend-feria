import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { Panel } from "../interfaces/panel.interface";

import {
  panelsUrl,
  getPanels,
} from "../services/panel.service";

const useGetEventsClient = () => {
  const { data, isLoading, error } = useSWR<Panel[]>(
    `${panelsUrl}`,
    getPanels
  );

  /* console.log(data); */

  return { panels: data, isLoading, error };
};

export { useGetEventsClient };
