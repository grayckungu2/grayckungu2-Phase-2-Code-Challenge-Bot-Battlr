import React from 'react';

const BotCard = ({ bot, handleViewDetails, handleEnlist,  }) => {
  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {bot.enlisted ? (
        <button onClick={() => handleViewDetails(bot)} className="view-details">View Details</button>
      ) : (
        <button onClick={() => handleEnlist(bot)}>Enlist Bot</button>
      )}
      
    </div>
  );
};

export default BotCard;