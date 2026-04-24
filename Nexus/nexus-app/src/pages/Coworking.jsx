import { useState, useEffect } from 'react';
import ModalReserva from '../components/ModalReserva';

const Coworking = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [mesa, setMesa] = useState("");
  const [reservas, setReservas] = useState({});

  useEffect(() => {
    const guardadas = JSON.parse(localStorage.getItem('reservas-coworking')) || {};
    setReservas(guardadas);
  }, []);

  const abrirReserva = (nombre) => {
    setMesa(nombre);
    setModalVisible(true);
  };

  const manejarConfirmacion = (e) => {
    e.preventDefault();
    const hora = e.target.hora.value;
    
    const nuevasReservas = { 
      ...reservas, 
      [mesa]: { hora } 
    };
    
    setReservas(nuevasReservas);
    localStorage.setItem('reservas-coworking', JSON.stringify(nuevasReservas));
  };

  const claseReserva = (nombre) => (reservas[nombre] ? "reservada" : "");

  return (
    <div>
      <div className="info">
        <h1>Plano de Coworking</h1>
        <p className="info_cursiva">Haz clic en un espacio para reservar tu sitio.</p>
      </div>

      <div className="layout"> 
        <button className={`mesa1 ${claseReserva("Mesa 1")}`} onClick={() => abrirReserva("Mesa 1")}>
          <h1>Mesa 1</h1><p>{reservas["Mesa 1"] ? "RESERVADA" : "4 puestos"}</p>
        </button>
        <button className={`mesa2 ${claseReserva("Mesa 2")}`} onClick={() => abrirReserva("Mesa 2")}>
          <h1>Mesa 2</h1><p>{reservas["Mesa 2"] ? "RESERVADA" : "4 puestos"}</p>
        </button>
        <button className={`mesa3 ${claseReserva("Mesa 3")}`} onClick={() => abrirReserva("Mesa 3")}>
          <h1>Mesa 3</h1><p>{reservas["Mesa 3"] ? "RESERVADA" : "4 puestos"}</p>
        </button>
        <button className={`mesa4 ${claseReserva("Mesa 4")}`} onClick={() => abrirReserva("Mesa 4")}>
          <h1>Mesa 4</h1><p>{reservas["Mesa 4"] ? "RESERVADA" : "4 puestos"}</p>
        </button>
        <button className={`mesaCom ${claseReserva("Mesa Comunitaria")}`} onClick={() => abrirReserva("Mesa Comunitaria")}>
          <h1>Mesa Com.</h1><p>{reservas["Mesa Comunitaria"] ? "RESERVADA" : "12 puestos"}</p>
        </button>
        <button className={`sala1 ${claseReserva("Sala de Reunión 1")}`} onClick={() => abrirReserva("Sala de Reunión 1")}>
          <h1>Sala 1</h1><p>{reservas["Sala de Reunión 1"] ? "RESERVADA" : ""}</p>
        </button>
        <button className={`sala2 ${claseReserva("Sala de Reunión 2")}`} onClick={() => abrirReserva("Sala de Reunión 2")}>
          <h1>Sala 2</h1><p>{reservas["Sala de Reunión 2"] ? "RESERVADA" : ""}</p>
        </button>
        <button className={`mesa6 ${claseReserva("Mesa 6")}`} onClick={() => abrirReserva("Mesa 6")}>
          <h1>Mesa 6</h1><p>{reservas["Mesa 6"] ? "RESERVADA" : ""}</p>
        </button>
        <button className={`mesa5 ${claseReserva("Mesa 5")}`} onClick={() => abrirReserva("Mesa 5")}>
          <h1>Mesa 5</h1><p>{reservas["Mesa 5"] ? "RESERVADA" : ""}</p>
        </button>

        <div className="pasillo1"></div>
        <div className="pasillo2"></div>
        <div className="entrada">ENTRADA</div>
        <div className="cafeteria">ZONA CAFÉ</div>
      </div>

      {modalVisible && (
        <ModalReserva 
          mesa={mesa}
          datosReserva={reservas[mesa]}
          onClose={() => setModalVisible(false)}
          onConfirmar={manejarConfirmacion}
        />
      )}
    </div>
  );
};

export default Coworking;