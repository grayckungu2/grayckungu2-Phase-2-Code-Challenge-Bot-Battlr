import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, handleEnlist, handleViewDetails }) => {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-card-container">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleEnlist={() => handleEnlist(bot)} handleViewDetails={() => handleViewDetails(bot)} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
