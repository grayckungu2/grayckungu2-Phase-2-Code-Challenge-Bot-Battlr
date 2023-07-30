import React from 'react';

const BotSpecs = ({ bot, handleEnlist, handleBack }) => {
  return (
    <div className="bot-specs">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {bot.enlisted ? (
        <button onClick={handleBack}>Back to List</button>
      ) : (
        <button onClick={() => handleEnlist(bot)}>Enlist Bot</button>
      )}
    </div>
  );
};

export default BotSpecs;