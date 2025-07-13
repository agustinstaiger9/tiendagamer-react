import { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [selectedConsole, setSelectedConsole] = useState('');

  const handleFilter = () => {
    onFilter(selectedConsole);
  };

  return (
    <div className="filter-container">
      <select
        className="filter-select"
        value={selectedConsole}
        onChange={(e) => setSelectedConsole(e.target.value)}
      >
        <option value="">Todas las consolas</option>
        <option value="PS5">PS5</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
        <option value="Xbox One">Xbox One</option>
      </select>

      <button className="filter-button" onClick={handleFilter}>
        Buscar
      </button>
    </div>
  );
};

export default Filter;
