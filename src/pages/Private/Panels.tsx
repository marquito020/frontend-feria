import { toast, Toaster } from "react-hot-toast";

import { useGetEventsClient } from "../../hooks/usePanel.hook";
import { RiCameraLine } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addToCart, removePhoto } from "../../redux/states/cart.state";

function Panels() {
  const dispatch = useDispatch();
  const select = useSelector((state: RootState) => state.select);
  const ulitmoSelect = select;
  const { panels, isLoading, error } = useGetEventsClient();

  console.log("Paneles", panels);
  console.log("select", select);

  if (isLoading) return <div>Loading photos...</div>;
  else if (error) return <div>Error {`${error}`}</div>;

  if (panels?.length == 0)
    return <div>No participo en ningun evento</div>;

  return (
    <>
      <Toaster />
      <div className="bg-white mt-20 shadow-lg">
        <div
          className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 "
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Paneles
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3  xl:gap-x-8">
            {panels!.map((panel, index) => (
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
                          src={panel.imgURL}
                          alt={panel.imgURL}
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
                      src={panel.imgURL}
                      alt={panel.imgURL}
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
                      Marca: {panel.marca}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      Modelo: {panel.modelo}
                    </p>
                    {/* Tamaño por celda */}
                    <p className="text-sm font-medium text-gray-900">
                      Tamaño: largo {panel.tamanoCelda?.largo} mm, ancho{" "} {panel.tamanoCelda?.ancho} mm
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      Potencia: {panel.potenciaMaximaW} W
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      Peso por pieza: {panel.pesoPieza} kg
                    </p>
                    {/* Tension Maxima*/}
                    <p className="text-sm font-medium text-gray-900">
                      Tension Maxima: {panel.tensionMaxima} V
                    </p>
                    {/* Corriente Maxima*/}
                    <p className="text-sm font-medium text-gray-900">
                      Corriente Maxima: {panel.corrienteMaxima} A
                    </p>
                    {/* Precio */}
                    <p className="text-sm font-medium text-gray-900">
                      Precio: {panel.precio} Bs
                    </p>
                  </div>
                </div>
                <div className="">
                  {select?.panelId === panel._id ? (
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
                        toast.success("Panel removido del carrito");
                      }}
                      className="text-sm text-red-500 hover:bg-red-100 rounded px-3 py-2"
                    >
                      Remover
                    </button>
                  ) : (
                    (select?.panelId == "" || select?.panelId == undefined) &&
                    <button
                      onClick={() => {
                        dispatch(addToCart(
                          {
                            panelId: panel._id,
                            panelMarca: panel.marca,
                            panelModelo: panel.modelo,
                            panelImgURL: panel.imgURL,
                            panelPotencia: panel.potenciaMaximaW,
                            panelPrecio: panel.precio,
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
                          }
                        ));
                        toast.success("Panel agregado al carrito");
                      }}
                      className="text-sm text-blue-500 hover:bg-blue-100 rounded px-3 py-2"
                    >
                      Agregar
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

export default Panels;
