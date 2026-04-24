const ModalReserva = ({ isOpen, mesa, datosReserva, onClose, onConfirmar }) => {
  // LÓGICA DE VISIBILIDAD
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        
        {datosReserva ? (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#D97B59' }}>¡Espacio Reservado!</h2>
            {}
            <p>Has reservado la <strong>{mesa}</strong></p>
            <div style={styles.ticket}>
              <p>🕒 Hora confirmada:</p>
              <h1 style={{ margin: '10px 0' }}>{datosReserva.hora}</h1>
            </div>
            <p className="info_cursiva">Presenta este ticket al llegar al centro.</p>
          </div>
        ) : (
          <div>
            {}
            <h2>Reservar: {mesa}</h2>
            <p>Selecciona la hora de entrada:</p>
            <form onSubmit={onConfirmar} style={styles.form}>
              <input type="time" name="hora" required style={styles.input} />
              <button type="submit" style={styles.btnConfirmar}>Confirmar Reserva</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  ticket: {
    backgroundColor: '#fdf2f0',
    border: '2px dashed #D97B59',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px 0'
  },
  form: { 
    display: 'flex', 
    flexDirection: 'column',
    gap: '15px', 
    marginTop: '15px' 
  },
  input: { 
    padding: '10px', 
    fontSize: '1.1rem', 
    borderRadius: '5px', 
    border: '1px solid #ddd' 
  },
  btnConfirmar: { 
    backgroundColor: '#0D0D0D', 
    color: 'white', 
    padding: '12px', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer' 
  }
};

export default ModalReserva;