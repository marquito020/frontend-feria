import { baseUrl } from "../constants/routes";
import { Client } from "../interfaces/client.interface";

export const clientsUrl = baseUrl + "api/users";

const getAllClients = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const addClient = async (url: string, { arg }: { arg: FormData }) => {
  console.log("addClient", JSON.stringify(arg));
  var object = {
    "nombre": arg.get("nombre"),
    "password": arg.get("password"),
    "email": arg.get("email"),
    "celular": arg.get("celular"),
    "fecha_nacimiento": arg.get("fecha_nacimiento"),
    "rol": arg.get("rol"),
  };
  console.log("addClient", JSON.stringify(object));
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(object),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
};

const getClient = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const updateClient = async (url: string, { arg }: { arg: FormData }) => {
  const response = await fetch(url, {
    method: "PUT",
    body: arg,
  });
  const data = await response.json();
  return data;
};

const deleteClient = async (url: string, { arg }: { arg: number }) => {
  const response = await fetch(`${url}/${arg}`, { method: "DELETE" });
  const data = await response.json();
  return data;
};

export { getAllClients, addClient, getClient, updateClient, deleteClient };
