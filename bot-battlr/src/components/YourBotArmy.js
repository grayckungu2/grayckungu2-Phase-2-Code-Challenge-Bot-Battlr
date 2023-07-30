import React from 'react';

const YourBotArmy = ({ army, handleDischarge, handleViewDetails }) => {
  return (
    <div className="bot-army">
      <h2>My Bot Army</h2>
      <div className="bot-card-container">
      {army.map((bot) => (
        <div key={bot.id} className="bot-card">
          <h3>{bot.name}</h3>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => handleDischarge(bot.id)} className="remove-button">Remove</button>
          <button onClick={() => handleViewDetails(bot)}>View Details</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default YourBotArmy;