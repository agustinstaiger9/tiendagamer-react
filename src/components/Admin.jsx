import { useState, useEffect } from 'react';
import juegosOriginales from '../data/juegos';

const Admin = () => {
  const [juegosAdmin, setJuegosAdmin] = useState([]);

  useEffect(() => {
    const juegosGuardados = JSON.parse(localStorage.getItem('juegos')) || [];
    setJuegosAdmin(juegosGuardados);
  }, []);

  const handleEliminar = (id) => {
    const juegosActualizados = juegosAdmin.filter(juego => juego.id !== id);
    setJuegosAdmin(juegosActualizados);
    localStorage.setItem('juegos', JSON.stringify(juegosActualizados));
  };

  const handleRestablecer = () => {
    localStorage.setItem('juegos', JSON.stringify(juegosOriginales));
    setJuegosAdmin(juegosOriginales);
  };

  return (
    <div className="admin-container">
      <h1>Panel de Administración</h1>
      <button
        onClick={handleRestablecer}
        className="btn-restablecer"
        aria-label="Restablecer juegos"
      >
        Restablecer Juegos
      </button>
      {juegosAdmin.length === 0 ? (
        <p>No hay juegos en el catálogo.</p>
      ) : (
        <div className="lista-juegos">
          {juegosAdmin.map(juego => (
            <div key={juego.id} className="card-container admin-card">
              <div className="card-front">
                <img src={juego.imagen} alt={juego.titulo} />
                <h3>{juego.titulo}</h3>
                <p>{juego.consola}</p>
                <p>${juego.precio}</p>
              </div>
              <button
                onClick={() => handleEliminar(juego.id)}
                className="btn-eliminar"
                aria-label="Eliminar juego"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
