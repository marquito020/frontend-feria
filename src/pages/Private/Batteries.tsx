import { toast, Toaster } from "react-hot-toast";

import { useGetEventsClient } from "../../hooks/useBattery.hook";
import { RiCameraLine } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addToCart, removePhoto } from "../../redux/states/cart.state";

function Batteries() {
  const dispatch = useDispatch();
  const select = useSelector((state: RootState) => state.select);
  const ulitmoSelect = select;
  const { batteries, isLoading, error } = useGetEventsClient();

  console.log("batteryes", batteries);
  console.log("select", select);

  if (isLoading) return <div>Loading photos...</div>;
  else if (error) return <div>Error {`${error}`}</div>;

  if (batteries?.length == 0)
    return <div>No participo en ningun evento</div>;

  return (
    <>
      <Toaster />
      <div className="bg-white mt-20 shadow-lg">
        <div
          className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 "
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Baterias
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3  xl:gap-x-8">
            {batteries!.map((battery, index) => (
              <div key={index}>
                <label
                  htmlFor={`my-modal-${index}`}
                  className=" hover:cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={`my-modal-${index}`}
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box relative ">
                      <label
                        htmlFor={`my-modal-${index}`}
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      {/* <h3 className="text-lg font-bold">
                          Congratulations random Internet user!
                        </h3> */}
                      <br />
                      {/* Imagen del modal */}
                      <div className="z-0 relative min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none ">
                        <img
                          draggable={false}
                          src={battery.imgURL}
                          alt={battery.imgURL}
                          className="h-full w-full  object-cover object-center lg:h-full lg:w-full z-10"
                        />
                        <span
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            padding: "8px",
                            backgroundColor: "rgba(0, 0, 0, 0.0)",
                            color: "white",
                            fontSize: "300px",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            zIndex: 2,
                          }}
                        >
                          <RiCameraLine className="text-transparent" />
                        </span>

                        <span
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            padding: "8px",
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                            color: "white",
                            fontSize: "80px",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            zIndex: 2,
                          }}
                        >
                          <RiCameraLine />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Imagen */}
                  <div className="z-0 relative min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                    <img
                      draggable={false}
                      src={battery.imgURL}
                      alt={battery.imgURL}
                      className="h-full w-full  object-cover object-center lg:h-full lg:w-full z-10"
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        padding: "8px",
                        backgroundColor: "rgba(0, 0, 0, 0.0)",
                        color: "white",
                        fontSize: "300px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        zIndex: 2,
                      }}
                    >
                      <RiCameraLine className="text-transparent" />
                    </span>
                  </div>
                </label>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Marca: {battery.marca}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      Modelo: {battery.modelo}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      Capacidad: {battery.capacidadAh} Ah
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      Voltaje: {battery.voltaje} V
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      Tipo: {battery.tipoBateria}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      Ciclos de vida: {battery.ciclosVida}
                    </p>
                    {/* Precio */}
                    <p className="mt-2 text-sm font-medium text-gray-900">
                      Precio: {battery.precio} Bs
                    </p>
                  </div>
                </div>
                <div className="">
                  {select?.batteryId == battery._id ? (
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
                        toast.error("Bateria removido");
                      }}
                      className="text-red-500 font-medium  rounded-md px-4 py-1 w-full"
                    >
                      Remover
                    </button>
                  ) : (
                    (select?.batteryId == "" || select?.batteryId == undefined) &&
                    <button
                      onClick={() => {
                        dispatch(
                          addToCart({
                            panelId: ulitmoSelect?.panelId,
                            panelMarca: ulitmoSelect?.panelMarca,
                            panelModelo: ulitmoSelect?.panelModelo,
                            panelImgURL: ulitmoSelect?.panelImgURL,
                            panelPotencia: ulitmoSelect?.panelPotencia,
                            panelPrecio: ulitmoSelect?.panelPrecio,
                            batteryId: battery._id,
                            batteryImgURL: battery.imgURL,
                            batteryCapacidadAh: battery.capacidadAh,
                            batteryVoltaje: battery.voltaje,
                            batteryMarca: battery.marca,
                            batteryModelo: battery.modelo,
                            batteryPrecio: battery.precio,
                            inverterId: ulitmoSelect?.inverterId,
                            inverterMarca: ulitmoSelect?.inverterMarca,
                            inverterModelo: ulitmoSelect?.inverterModelo,
                            inverterImgURL: ulitmoSelect?.inverterImgURL,
                            inverterPotenciaNominalW: ulitmoSelect?.inverterPotenciaNominalW,
                            inverterPotenciaPicoW: ulitmoSelect?.inverterPotenciaPicoW,
                            inverterPrecio: ulitmoSelect?.inverterPrecio,
                          })
                        );
                        toast.success("Bateria seleccionado");
                      }}
                      className=" text-sky-500 font-medium  rounded-md px-4 py-1 w-full"
                    >
                      + Seleccionar
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Batteries;
