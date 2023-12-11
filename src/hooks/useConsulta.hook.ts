import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { Consulta } from '../interfaces/consulta.interface';
import {
    addConsulta,
    deleteConsulta,
    getAllConsultas,
    getConsulta,
    consultasUrl,
    updateConsulta,
} from "../services/consulta.service";

const useAllConsultas = () => {
    const { data, isLoading, error } = useSWR<Consulta[]>(
        consultasUrl,
        getAllConsultas
    );

    return { consultas: data, isLoading, error };
};

const useAddConsulta = () => {
    const { trigger, isMutating, error } = useSWRMutation<
        Consulta,
        string,
        string,
        Consulta
    >(consultasUrl, addConsulta);

    return { addConsulta: trigger, isMutating, error };
};

const getConsultaById = (id: string) => {
    const { data, isLoading, error } = useSWR<Consulta>(
        `${consultasUrl}/${id}`,
        getConsulta
    );
    return { consulta: data, isLoading, error };
};

export { useAllConsultas, useAddConsulta, getConsultaById };

