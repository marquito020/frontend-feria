import React from "react";

const Landing = () => {
  return (
    <div className="" style={
      {
        backgroundImage: `url("https://res.cloudinary.com/dg2ugi96k/image/upload/v1701856921/feria_shirley/WhatsApp_Image_2023-12-06_at_5.59.59_AM_hwpnlu.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }
    }>
      {/* Navbar */}
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-end">
          <a href="/login" className="mr-4 text-lg font-semibold">
            Ingresar
          </a>
          <a href="/register" className="text-lg font-semibold">
            Registrar
          </a>
        </div>
      </nav>
      {/* Encabezado */}
      <header className="text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-white">COSTCLEAN</h1>
          <p className="text-xl font-bold text-white">Construyendo el futuro, Potenciando el presente</p>
        </div>
      </header>

      {/* Sección de Análisis de Transición */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Análisis de la Transición a la Energía Renovable</h2>
          <p className="text-lg mb-4">
            La transición a fuentes de energía renovable es esencial en el contexto actual para garantizar la sostenibilidad energética y mitigar el impacto ambiental. Para llevar a cabo esta transición, es crucial realizar un análisis profundo y preciso.
          </p>
          <p className="text-lg mb-4">
            Este proceso de análisis implica evaluar diversos factores, como la capacidad de generación requerida para satisfacer la demanda energética de una empresa, la inversión inicial necesaria para la implementación de tecnologías renovables y el tiempo estimado para la recuperación de esta inversión a través de los ahorros en costos energéticos.
          </p>
          <p className="text-lg mb-4">
            Además, es fundamental considerar la viabilidad técnica y económica de la integración de paneles solares, turbinas eólicas u otras fuentes renovables en el entorno específico de la empresa. Esto implica un análisis detallado de la ubicación geográfica, la disponibilidad de recursos naturales y los incentivos gubernamentales disponibles para facilitar esta transición.
          </p>
          <p className="text-lg">
            Un enfoque holístico en el análisis de la transición a la energía renovable permitirá a las empresas comprender mejor los beneficios, desafíos y oportunidades asociados con este cambio, allanando el camino para una implementación exitosa y sostenible.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Empresa 1 - Bolivia */}
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Empresas que usan energía renovable</h3>
              <h4 className="text-lg font-semibold mb-2">Bolivia</h4>
              {/* Contenido Bolivia */}
              <p className="text-gray-800 mb-4">
                <strong>YPFB (Yacimientos Petrolíferos Fiscales Bolivianos):</strong> La empresa estatal de petróleo y gas de Bolivia también ha estado explorando opciones de energías renovables para diversificar su matriz energética.
              </p>
            </div>
            {/* Empresa 2 - Google */}
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Empresas que usan energía renovable</h3>
              <h4 className="text-lg font-semibold mb-2">Cliente 1 - Google</h4>
              {/* Contenido Google */}
              <p className="text-gray-800 mb-4">
                <strong>Google:</strong> Google ha estado comprometido con la sostenibilidad y ha alcanzado la neutralidad de carbono. La empresa ha invertido en numerosos proyectos de energías renovables en todo el mundo, incluyendo parques eólicos y plantas solares.
              </p>
            </div>
            {/* Empresa 3 - Tesla */}
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Empresas que usan energía renovable</h3>
              <h4 className="text-lg font-semibold mb-2">Cliente 2 - Tesla</h4>
              {/* Contenido Tesla */}
              <p className="text-gray-800 mb-4">
                <strong>Tesla:</strong> Tesla, la compañía de vehículos eléctricos y energía, se ha destacado por su compromiso con las energías renovables. Además de la fabricación de vehículos eléctricos, Tesla está involucrada en la producción y almacenamiento de energía renovable a través de sus productos como los paneles solares y Powerwall.
              </p>
            </div>
            {/* Empresa 4 - IKEA */}
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Empresas que usan energía renovable</h3>
              <h4 className="text-lg font-semibold mb-2">Cliente 3 - IKEA</h4>
              {/* Contenido IKEA */}
              <p className="text-gray-800 mb-4">
                <strong>IKEA:</strong> La cadena de muebles y artículos para el hogar, IKEA, ha invertido significativamente en energías renovables. Ha instalado paneles solares en muchas de sus tiendas y almacenes, y tiene como objetivo ser totalmente sostenible para 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto">
          <p className="text-sm">Derechos reservados © 2023 Empresa X</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
