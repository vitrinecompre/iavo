/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useCallback, useMemo } from 'react';
import { PaperIcon, RockIcon, ScissorsIcon } from './components/icons';

type Choice = 'rock' | 'paper' | 'scissors';

// FIX: Changed JSX.Element to React.ReactNode to resolve namespace error.
const choices: { name: Choice; icon: React.ReactNode; beats: Choice }[] = [
  { name: 'rock', icon: <RockIcon />, beats: 'scissors' },
  { name: 'paper', icon: <PaperIcon />, beats: 'rock' },
  { name: 'scissors', icon: <ScissorsIcon />, beats: 'paper' },
];

const App: React.FC = () => {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [resultMessage, setResultMessage] = useState<string>('Make your move!');

  const handlePlay = useCallback((playerChoice: Choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)].name;
    setUserChoice(playerChoice);
    setComputerChoice(computerChoice);

    if (playerChoice === computerChoice) {
      setResultMessage("It's a Tie!");
    } else if (choices.find(c => c.name === playerChoice)?.beats === computerChoice) {
      setResultMessage('You Win!');
      setUserScore(prev => prev + 1);
    } else {
      setResultMessage('You Lose.');
      setComputerScore(prev => prev + 1);
    }
  }, []);

  const resetGame = useCallback(() => {
    setUserScore(0);
    setComputerScore(0);
    setUserChoice(null);
    setComputerChoice(null);
    setResultMessage('Make your move!');
  }, []);
  
  const resultDisplay = useMemo(() => {
    const userChoiceData = userChoice ? choices.find(c => c.name === userChoice) : null;
    const computerChoiceData = computerChoice ? choices.find(c => c.name === computerChoice) : null;
    
    let resultColor = 'text-gray-300';
    if (resultMessage === 'You Win!') resultColor = 'text-green-400';
    if (resultMessage === 'You Lose.') resultColor = 'text-red-400';
    if (resultMessage === "It's a Tie!") resultColor = 'text-yellow-400';

    if (!userChoice || !computerChoice || !userChoiceData || !computerChoiceData) {
      return <p className="text-3xl text-gray-400 transition-all duration-300 h-32 flex items-center">{resultMessage}</p>;
    }
    
    return (
      <div className="flex flex-col items-center justify-center h-32 transition-all duration-300">
        <div className="flex items-center gap-8 mb-4">
          <div className="flex flex-col items-center gap-2">
            <span className="font-bold text-indigo-400">YOU</span>
            <div className="w-24 h-24 bg-gray-800 border-2 border-indigo-500 rounded-full flex items-center justify-center text-indigo-400">{userChoiceData.icon}</div>
          </div>
          <span className="text-2xl font-bold text-gray-500">VS</span>
          <div className="flex flex-col items-center gap-2">
            <span className="font-bold text-pink-400">CPU</span>
            <div className="w-24 h-24 bg-gray-800 border-2 border-pink-500 rounded-full flex items-center justify-center text-pink-400">{computerChoiceData.icon}</div>
          </div>
        </div>
        <p className={`text-4xl font-bold ${resultColor}`}>{resultMessage}</p>
      </div>
    );

  }, [userChoice, computerChoice, resultMessage]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center font-sans p-4 select-none">
      <header className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">Rock Paper Scissors</h1>
      </header>
      
      <main className="w-full max-w-3xl flex flex-col items-center bg-black/20 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-800">
        <div className="flex justify-around w-full max-w-md mb-10 text-3xl font-semibold bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
          <div className="text-center px-4">
            <p className="text-indigo-400 text-2xl">You</p>
            <p className="text-5xl tabular-nums">{userScore}</p>
          </div>
          <div className="text-center px-4">
            <p className="text-pink-400 text-2xl">Computer</p>
            <p className="text-5xl tabular-nums">{computerScore}</p>
          </div>
        </div>

        {resultDisplay}

        <div className="flex gap-4 md:gap-8 my-8">
          {choices.map(choice => (
            <button
              key={choice.name}
              onClick={() => handlePlay(choice.name)}
              aria-label={choice.name}
              className="w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-indigo-600 hover:scale-110 active:scale-100 transition-all duration-200 ease-in-out transform focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              {choice.icon}
            </button>
          ))}
        </div>
        
        {(userScore > 0 || computerScore > 0) && (
          <button
            onClick={resetGame}
            className="mt-4 px-6 py-2 bg-red-800/50 hover:bg-red-800/80 text-white font-semibold rounded-lg transition-colors border border-red-700"
          >
            Reset Score
          </button>
        )}
      </main>
      <footer className="mt-8 text-gray-600 text-sm">
        <p>Built with Gemini</p>
      </footer>
    </div>
  );
};

export default App;