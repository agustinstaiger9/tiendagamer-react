import { useState } from 'react';

const FormularioJuego = ({ agregarJuego }) => {
  const [titulo, setTitulo] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !precio || !imagen) return;

    const nuevoJuego = {
      id: crypto.randomUUID(),
      titulo,
      precio: parseFloat(precio),
      imagen,
      consola: 'PS5',
      sinopsis: 'Juego agregado por el usuario.',
      destacado: false,
    };


    const juegosGuardados = JSON.parse(localStorage.getItem('juegos')) || [];
    const juegosActualizados = [nuevoJuego, ...juegosGuardados];
    localStorage.setItem('juegos', JSON.stringify(juegosActualizados));

    agregarJuego(nuevoJuego);

    setTitulo('');
    setPrecio('');
    setImagen('');
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-juego">
      <h2>Agregar Juego</h2>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de Imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FormularioJuego;
