import { useState } from 'react';
import juegos from '../data/juegos';
import ListaJuegos from '../components/ListaJuegos';
import Filter from '../components/Filter';

const Catalogo = () => {
  const [juegosFiltrados, setJuegosFiltrados] = useState(juegos);

  const handleFilter = (selectedConsole) => {
    const filtered = juegos.filter(juego => {
      return selectedConsole ? juego.consola === selectedConsole : true;
    });

    if (filtered.length === 0) {
      alert('No hay coincidencias.');
      setJuegosFiltrados(juegos);
    } else {
      setJuegosFiltrados(filtered);
    }
  };

  return (
    <div className="catalogo-container">
      <h1>Catálogo Completo</h1>
      <Filter onFilter={handleFilter} />
      <ListaJuegos juegos={juegosFiltrados} />
    </div>
  );
};

export default Catalogo;
