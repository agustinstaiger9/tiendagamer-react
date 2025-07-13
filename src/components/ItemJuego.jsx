import { useState } from 'react';

const ItemJuego = ({ juego, onDelete }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped(!flipped);

  return (
    <div
      className={`card-container ${flipped ? 'flipped' : ''}`}
      onClick={toggleFlip}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && toggleFlip()}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={juego.imagen} alt={juego.titulo} />
          <h3>{juego.titulo}</h3>
          <p>{juego.consola}</p>
          <p>${juego.precio}</p>
        </div>
        <div className="card-back">
          <h4>Descripción</h4>
          <p>{juego.sinopsis}</p>
          {onDelete && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(juego.id);
              }}
            >
              Borrar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemJuego;
