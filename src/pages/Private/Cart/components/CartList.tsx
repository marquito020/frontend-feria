import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";

import { RootState } from "../../../../redux/store";
import { removePhoto } from "../../../../redux/states/cart.state";
/* import { addConsulta } from "../../../../services/consulta.service"; */
import { Consulta } from '../../../../interfaces/consulta.interface';
import { useAddConsulta } from "../../../../hooks/useConsulta.hook";

function CartList() {
  const element = useSelector((state: RootState) => state.select);
  const user = useSelector((state: RootState) => state.user);
  console.log("User:", user._id);
  const ulitmoSelect = element;
  /* Consumo Anual */
  const [consumoAnual, setConsumoAnual] = useState(0);
  const { addConsulta } = useAddConsulta();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false); // Estado para manejar la visibilidad del modal
  const [responseData, setResponseData] = useState<Consulta | null>(null); // Estado para guardar la respuesta de la API
  const [precioTotal, setPrecioTotal] = useState(0); // Estado para guardar la respuesta de la API
  const [ahorroPorcentual, setAhorroPorcentual] = useState(0); // Estado para guardar la respuesta de la API
  const [tiempoRecuperacion, setTiempoRecuperacion] = useState(0); // Estado para guardar la respuesta de la API

  /* const id = "657026324516af930866a1dc";
  const reponse2 = getConsultaById(id);
  console.log("Consulta:", reponse2); */

  const handlePrintData = async () => {
    var Consulta: Consulta = {
      idUser: user._id?.toString(),
      idPanel: ulitmoSelect?.panelId?.toString(),
      idBattery: ulitmoSelect?.batteryId?.toString(),
      idInverter: ulitmoSelect?.inverterId?.toString(),
      consumoAnual: consumoAnual,
      fechaConsulta: new Date(),
    };
    const response = await addConsulta(Consulta);

    // Guardar la respuesta en el estado
    setResponseData(response);
    setPrecioTotal(response?.precioTotal ?? 0);
    setAhorroPorcentual(response?.ahorroPorcentual ?? 0);
    setTiempoRecuperacion(response?.tiempoRecuperacion ?? 0);

    // Mostrar el modal después de obtener la respuesta
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setResponseData(null); // Limpiar los datos al cerrar el modal
  };

  return (
    <>
      <Toaster />
      <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg w-full">
        <div className="flex justify-between mb-2">
          <div>
            <h1 className="text-gray-900 text-base font-medium">Lista</h1>
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <div>
            <h1 className="text-gray-900 text-base font-medium">Bateria</h1>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-7 gap-4 mb-4 px-3 py-4">
          <h5 className="col-span-1">Marca</h5>
          <h5 className="col-span-1">Modelo</h5>
          <h5 className="col-span-1">Foto</h5>
          <h5 className="col-span-1">Precio</h5>
          <h5 className="col-span-1">Capacidad</h5>
          <h5 className="col-span-1">Voltaje</h5>
        </div>
        {(element?.batteryId != "" && element?.batteryId != undefined) &&
          <div
            key={element?.batteryImgURL}
            className="grid grid-cols-1 md:grid-cols-7 gap-4 px-4 rounded-lg border-b border-gray-200 items-center bg-white hover:bg-gray-100 transition-colors mb-4  text-sm"
          >
            <div className="col-span-1">
              <p className="break-words">{element?.batteryMarca}</p>
            </div>
            <div className="col-span-1">
              <p className="break-words">{element?.batteryModelo}</p>
            </div>
            <div className="col-span-1">
              <h5 className="md:hidden font-bold mb-2">Foto</h5>
              <img
                draggable={false}
                src={element?.batteryImgURL}
                className="h-full w-full rounded-md  object-cover object-center lg:h-20 lg:w-20"
              />
            </div>
            <div className="col-span-1">
              <p className="break-words">{element?.batteryPrecio} Bs</p>
            </div>
            <div className="col-span-1">
              <p className="break-words">{element?.batteryCapacidadAh}</p>
            </div>
            <div className="col-span-1">
              <p>{element?.batteryVoltaje} AH</p>
            </div>
            <div className="col-span-1">
              <h5 className="md:hidden font-bold mb-2">Acciones</h5>
              <button
                onClick={() => {
                  dispatch(removePhoto({
                    batteryId: "",
                    batteryMarca: "",
                    batteryModelo: "",
                    batteryImgURL: "",
                    batteryCapacidadAh: 0,
                    batteryVoltaje: 0,
                    batteryPrecio: 0,
                    panelId: ulitmoSelect?.panelId,
                    panelMarca: ulitmoSelect?.panelMarca,
                    panelModelo: ulitmoSelect?.panelModelo,
                    panelImgURL: ulitmoSelect?.panelImgURL,
                    panelPotencia: ulitmoSelect?.panelPotencia,
                    panelPrecio: ulitmoSelect?.panelPrecio,
                    inverterId: ulitmoSelect?.inverterId,
                    inverterMarca: ulitmoSelect?.inverterMarca,
                    inverterModelo: ulitmoSelect?.inverterModelo,
                    inverterImgURL: ulitmoSelect?.inverterImgURL,
                    inverterPotenciaNominalW: ulitmoSelect?.inverterPotenciaNominalW,
                    inverterPotenciaPicoW: ulitmoSelect?.inverterPotenciaPicoW,
                    inverterPrecio: ulitmoSelect?.inverterPrecio,
                  }));
                  toast.success("Foto removida del carrito");
                }}
                className="text-sm text-red-500 hover:bg-red-100 rounded px-3 py-2"
              >
                Remover
              </button>
            </div>
          </div>
        }
        <div className="flex justify-between mb-2">
          <div>
            <h1 className="text-gray-900 text-base font-medium">Panel</h1>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-6 gap-4 mb-4 px-3 py-4">
          <h5 className="col-span-1">Marca</h5>
          <h5 className="col-span-1">Modelo</h5>
          <h5 className="col-span-1">Foto</h5>
          <h5 className="col-span-1">Precio</h5>
          <h5 className="col-span-1">Potencia</h5>
        </div>
        {(element?.panelId != "" && element?.panelId != undefined) &&
          <div
            key={element?.panelImgURL}
            className="grid grid-cols-1 md:grid-cols-6 gap-4 px-4 rounded-lg border-b border-gray-200 items-center bg-white hover:bg-gray-100 transition-colors mb-4  text-sm"
          >
            <div className="col-span-1">
              <p className="break-words">{element?.panelMarca}</p>
            </div>
            <div className="col-span-1">
              <p className="break-words">{element?.panelModelo}</p>
            </div>
            <div className="col-span-1">
              <h5 className="md:hidden font-bold mb-2">Foto</h5>
              <img
                draggable={false}
                src={element?.panelImgURL}
                className="h-full w-full rounded-md  object-cover object-center lg:h-20 lg:w-20"
              />
            </div>
            <div className="col-span-1">
              <p className="break-words">{element?.panelPrecio} Bs</p>
            </div>
            <div className="col-span-1">
              <p className="break-words">{element?.panelPotencia}</p>
            </div>
            <div className="col-span-1">
              <h5 className="md:hidden font-bold mb-2">Acciones</h5>
              <button
                onClick={() => {
                  dispatch(removePhoto({
                    panelId: "",
                    panelImgURL: "",
                    panelPotencia: 0,
                    panelMarca: "",
                    panelModelo: "",
                    panelPrecio: 0,
                    batteryId: ulitmoSelect?.batteryId,
                    batteryMarca: ulitmoSelect?.batteryMarca,
                    batteryModelo: ulitmoSelect?.batteryModelo,
                    batteryImgURL: ulitmoSelect?.batteryImgURL,
                    batteryCapacidadAh: ulitmoSelect?.batteryCapacidadAh,
                    batteryVoltaje: ulitmoSelect?.batteryVoltaje,
                    batteryPrecio: ulitmoSelect?.batteryPrecio,
                    inverterId: ulitmoSelect?.inverterId,
                    inverterMarca: ulitmoSelect?.inverterMarca,
                    inverterModelo: ulitmoSelect?.inverterModelo,
                    inverterImgURL: ulitmoSelect?.inverterImgURL,
                    inverterPotenciaNominalW: ulitmoSelect?.inverterPotenciaNominalW,
                    inverterPotenciaPicoW: ulitmoSelect?.inverterPotenciaPicoW,
                    inverterPrecio: ulitmoSelect?.inverterPrecio,
                  }));
                  toast.success("Foto removida del carrito");
                }}
                className="text-sm text-red-500 hover:bg-red-100 rounded px-3 py-2"
              >
                Remover
              </button>
            </div>
          </div>
        }
        <div className="flex justify-between mb-2">
          <div>
            <h1 className="text-gray-900 text-base font-medium">Inversor</h1>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-7 gap-4 mb-4 px-3 py-4">
          <h5 className="col-span-1">Marca</h5>
          <h5 className="col-span-1">Modelo</h5>
          <h5 className="col-span-1">Foto</h5>
          <h5 className="col-span-1">Precio</h5>
          <h5 className="col-span-1">Potencia Nominal</h5>
          <h5 className="col-span-1">Potencia Pico</h5>
        </div>
        {(element?.inverterId != "" && element?.inverterId != undefined) &&
          <div
            key={element?.inverterImgURL}
            className="grid grid-cols-1 md:grid-cols-7 gap-4 px-4 rounded-lg border-b border-gray-200 items-center bg-white hover:bg-gray-100 transition-colors mb-4  text-sm"
          >
            <div className="col-span-1">
              <p className="break-words">{element?.inverterMarca}</p>
            </div>
            <div className="col-span-1">
              <p className="break-words">{element?.inverterModelo}</p>
            </div>
            <div className="col-span-1">
              <h5 className="md:hidden font-bold mb-2">Foto</h5>
              <img
                draggable={false}
                src={element?.inverterImgURL}
                className="h-full w-full rounded-md  object-cover object-center lg:h-20 lg:w-20"
              />
            </div>
            <div className="col-span-1">
              <p className="break-words">{element?.inverterPrecio} Bs</p>
            </div>
            <div className="col-span-1">
              <p className="break-words">{element?.inverterPotenciaNominalW} W</p>
            </div>
            <div className="col-span-1">
              <p className="break-words">{element?.inverterPotenciaPicoW} W</p>
            </div>
            <div className="col-span-1">
              <h5 className="md:hidden font-bold mb-2">Acciones</h5>
              <button
                onClick={() => {
                  dispatch(removePhoto({
                    inverterId: "",
                    inverterMarca: "",
                    inverterModelo: "",
                    inverterImgURL: "",
                    inverterPotenciaNominalW: 0,
                    inverterPotenciaPicoW: 0,
                    panelId: ulitmoSelect?.panelId,
                    panelMarca: ulitmoSelect?.panelMarca,
                    panelModelo: ulitmoSelect?.panelModelo,
                    panelImgURL: ulitmoSelect?.panelImgURL,
                    panelPotencia: ulitmoSelect?.panelPotencia,
                    batteryId: ulitmoSelect?.batteryId,
                    batteryMarca: ulitmoSelect?.batteryMarca,
                    batteryModelo: ulitmoSelect?.batteryModelo,
                    batteryImgURL: ulitmoSelect?.batteryImgURL,
                    batteryCapacidadAh: ulitmoSelect?.batteryCapacidadAh,
                    batteryVoltaje: ulitmoSelect?.batteryVoltaje,
                  }));
                  toast.success("Foto removida del carrito");
                }}
                className="text-sm text-red-500 hover:bg-red-100 rounded px-3 py-2"
              >
                Remover
              </button>
            </div>
          </div>
        }
        {(element?.inverterId != "" && element?.inverterId != undefined
          && element?.panelId != "" && element?.panelId != undefined
          && element?.batteryId != "" && element?.batteryId != undefined
        ) &&
          <div>
            <div className="flex justify-between mb-2">
              <div>
                <h1 className="text-white-900 text-base font-medium">Consumo Total</h1>
              </div>
              {/* Imput Consumo Total */}
              <div className="flex justify-center">
                <input
                  type="number"
                  className="border border-gray-200 rounded-md p-2 w-20"
                  placeholder="0"
                  style={{ color: 'white' }}
                  onChange={(e) => {
                    setConsumoAnual(parseInt(e.target.value));
                  }}
                />
              </div>
            </div>
            <button
              onClick={handlePrintData}
              className="bg-sky-500 w-full rounded-md px-4 py-2 text-base text-white hover:bg-sky-600 disabled:bg-gray-500"
            >
              Calcular
            </button>
          </div>
        }
        {/* Modal */}
        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeModal}></div>
              <div className="bg-white rounded-lg p-8 z-10">
                <div className="flex justify-end">
                  <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <h2 className="text-lg font-bold mb-4">Datos de la respuesta</h2>
                {/* {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>} */}
                <div className="justify-between mb-2">
                  <div>
                    <h1 className="text-gray-900 text-base font-medium">Precio Total:</h1>
                  </div>
                  <div>
                    <p className="text-gray-900 text-base font-medium">{precioTotal} Bs</p>
                  </div>

                  <div>
                    <h1 className="text-gray-900 text-base font-medium">Ahorro Potencial:</h1>

                    <p className="text-gray-900 text-base font-medium">{ahorroPorcentual} Bs</p>

                    <h1 className="text-gray-900 text-base font-medium">Tiempo de Recuperación:</h1>

                    <p className="text-gray-900 text-base font-medium">{tiempoRecuperacion} meses</p>

                    {/* Cantidad de Paneles */}
                    <h1 className="text-gray-900 text-base font-medium">Cantidad de Paneles:</h1>
                    <p className="text-gray-900 text-base font-medium">{responseData?.cantidadPaneles}</p>

                    {/* Cantidad de Baterias */}
                    <h1 className="text-gray-900 text-base font-medium">Cantidad de Baterias:</h1>
                    <p className="text-gray-900 text-base font-medium">{responseData?.cantidadBaterias}</p>

                    {/* Cantidad de Inversores */}
                    <h1 className="text-gray-900 text-base font-medium">Cantidad de Inversores:</h1>
                    <p className="text-gray-900 text-base font-medium">{responseData?.cantidadInversores}</p>

                    {/* Cantidad de Paneles */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default CartList;
