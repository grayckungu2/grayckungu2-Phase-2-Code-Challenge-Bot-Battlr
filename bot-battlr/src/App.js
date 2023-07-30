import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import FilterBar from './components/FilterBar';
import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);
  // eslint-disable-next-line
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortType, setSortType] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8005/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.log(error));
  }, []);

  const handleViewDetails = (bot) => {
    setSelectedBot(bot);
  };

  const handleBack = () => {
    setSelectedBot(null);
  };

  const handleEnlist = (bot) => {
    if (!bot.enlisted) {
      setArmy((prevArmy) => [...prevArmy, { ...bot, enlisted: true }]);
      setBots((prevBots) =>
        prevBots.map((b) => (b.id === bot.id ? { ...b, enlisted: true } : b))
      );
    }
  };

  const handleDischarge = (botId) => {
    setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
    setBots((prevBots) =>
      prevBots.map((b) => (b.id === botId ? { ...b, enlisted: false } : b))
    );
  };

  const handleSort = (type) => {
    setSortType(type);
  };

  const handleFilter = (botClass) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(botClass)) {
        return prevFilters.filter((filter) => filter !== botClass);
      } else {
        return [...prevFilters, botClass];
      }
    });
  };

  const filteredBots = bots.filter(
    (bot) => selectedFilters.length === 0 || selectedFilters.includes(bot.bot_class)
  );

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (sortType === 'health') {
      return b.health - a.health;
    } else if (sortType === 'damage') {
      return b.damage - a.damage;
    } else if (sortType === 'armor') {
      return b.armor - a.armor;
    } else {
      return 0;
    }
  });

  const handleRelease = (bot) => {
    setArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
    setBots((prevBots) =>
      prevBots.map((b) => (b.id === bot.id ? { ...b, enlisted: false } : b))
    );
  };

  const enlistedBots = sortedBots.filter((bot) => bot.enlisted);

  return (
    <div className="app">
      <h1>Bot Army</h1>
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          handleEnlist={handleEnlist}
          handleBack={handleBack}
          handleViewDetails={handleViewDetails}
          handleRelease={handleRelease}
        />
      ) : (
        <>
          <SortBar handleSort={handleSort} />
          <FilterBar selectedFilters={selectedFilters} handleFilter={handleFilter} />
          <YourBotArmy army={enlistedBots} handleDischarge={handleDischarge} handleViewDetails={handleViewDetails} />
          <BotCollection bots={sortedBots} handleViewDetails={handleViewDetails} handleEnlist={handleEnlist} />
        </>
      )}
    </div>
  );
};

export default App;