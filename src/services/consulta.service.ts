import { baseUrl } from "../constants/routes";
import { Consulta } from "../interfaces/consulta.interface";

export const consultasUrl = baseUrl + "api/consultas";

const getAllConsultas = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const addConsulta = async (url: string, { arg }: { arg: Consulta }) => {
    console.log("addConsulta", arg);
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(arg),
        headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
};

const getConsulta = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const updateConsulta = async (url: string, { arg }: { arg: Consulta }) => {
    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(arg),
        headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
};

const deleteConsulta = async (url: string, { arg }: { arg: string }) => {
    const response = await fetch(`${url}/${arg}`, { method: "DELETE" });
    const data = await response.json();
    return data;
};

export {
    getAllConsultas,
    addConsulta,
    getConsulta,
    updateConsulta,
    deleteConsulta,
};
