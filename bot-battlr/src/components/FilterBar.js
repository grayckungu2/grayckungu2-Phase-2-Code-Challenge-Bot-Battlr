import React from 'react';

const FilterBar = ({ selectedFilters, handleFilter }) => {
  const botClasses = ['Support', 'Medic', 'Assault', 'Defender', 'Captain', 'Witch'];

  return (
    <div className="filter-bar">
      <h3>Filter by Class:</h3>
      {botClasses.map((botClass) => (
        <label key={botClass}>
          <input
            type="checkbox"
            checked={selectedFilters.includes(botClass)}
            onChange={() => handleFilter(botClass)}
          />
          {botClass}
        </label>
      ))}
    </div>
  );
};

export default FilterBar;