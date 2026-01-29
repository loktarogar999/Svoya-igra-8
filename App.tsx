
import React, { useState, useEffect, useCallback } from 'react';
import { GAME_DATA } from './constants';
import { Question, GameState } from './types';
import Board from './components/Board';
import QuestionView from './components/QuestionView';
import ScoreBoard from './components/ScoreBoard';
import { Trophy, Users, PlayCircle, RefreshCcw, Home } from 'lucide-react';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    visitedIds: new Set<string>(),
    currentQuestion: null,
    isAnswerVisible: false,
    scores: [0, 0, 0], // Default 3 teams
    numTeams: 3
  });

  const [isGameOver, setIsGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameState.visitedIds.size === GAME_DATA.flat().reduce((acc, cat) => acc + cat.questions.length, 0)) {
        // Technically game ends when all questions are done, but we let them reset
    }
  }, [gameState.visitedIds]);

  const handleSelectQuestion = (question: Question) => {
    if (gameState.visitedIds.has(question.id)) return;
    setGameState(prev => ({
      ...prev,
      currentQuestion: question,
      isAnswerVisible: false
    }));
  };

  const handleShowAnswer = () => {
    setGameState(prev => ({ ...prev, isAnswerVisible: true }));
  };

  const handleCloseQuestion = () => {
    if (gameState.currentQuestion) {
      setGameState(prev => {
        const nextVisited = new Set(prev.visitedIds);
        nextVisited.add(prev.currentQuestion!.id);
        return {
          ...prev,
          currentQuestion: null,
          isAnswerVisible: false,
          visitedIds: nextVisited
        };
      });
    }
  };

  const updateScore = (teamIndex: number, amount: number) => {
    setGameState(prev => {
      const newScores = [...prev.scores];
      newScores[teamIndex] += amount;
      return { ...prev, scores: newScores };
    });
  };

  const resetGame = () => {
    setGameState({
      visitedIds: new Set<string>(),
      currentQuestion: null,
      isAnswerVisible: false,
      scores: Array(gameState.numTeams).fill(0),
      numTeams: gameState.numTeams
    });
    setGameStarted(true);
  };

  const returnToMenu = () => {
    setGameStarted(false);
  };

  const startGame = (teams: number) => {
    setGameState(prev => ({
        ...prev,
        numTeams: teams,
        scores: Array(teams).fill(0),
        visitedIds: new Set<string>(),
        currentQuestion: null,
        isAnswerVisible: false,
    }));
    setGameStarted(true);
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-950 p-6">
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 text-center shadow-2xl max-w-2xl w-full animate-in fade-in duration-700">
          <h1 className="text-6xl font-bebas mb-4 text-yellow-400 tracking-wider">English Quest: Kazakhstan</h1>
          <p className="text-xl text-blue-100 mb-8">An interactive Jeopardy-style game for 8th Grade students.</p>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2 text-white">
              <Users className="text-yellow-400" /> Select Number of Teams
            </h2>
            <div className="flex gap-4 justify-center">
              {[2, 3, 4].map(num => (
                <button
                  key={num}
                  onClick={() => startGame(num)}
                  className="w-20 h-20 rounded-2xl bg-blue-600 text-white hover:bg-yellow-500 hover:text-blue-900 hover:scale-110 transition-all font-bold text-2xl border-2 border-white/30 shadow-lg"
                >
                  {num}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => startGame(gameState.numTeams)}
              className="mt-8 px-8 py-4 bg-yellow-400 text-blue-900 rounded-full font-bold text-xl hover:bg-yellow-300 transition-colors flex items-center gap-2 mx-auto shadow-xl"
            >
              <PlayCircle /> Start Game
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden animate-in fade-in duration-500">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-8 bg-blue-900/80 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bebas text-yellow-400 tracking-widest">JEOPARDY! ENGLISH EDITION</h2>
          <span className="text-sm bg-white/10 px-3 py-1 rounded-full text-blue-200">Level: 8th Grade</span>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={resetGame}
            className="flex items-center gap-2 text-sm text-blue-200 hover:text-yellow-400 transition-colors opacity-80 hover:opacity-100"
          >
            <RefreshCcw size={16} /> Reset Board
          </button>
          <button 
            onClick={returnToMenu}
            className="flex items-center gap-2 text-sm font-bold text-white bg-blue-700/50 hover:bg-blue-600 px-4 py-2 rounded-lg transition-all hover:text-yellow-400 border border-white/10"
          >
            <Home size={16} /> Main Menu
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex flex-col">
        {!gameState.currentQuestion ? (
          <Board 
            categories={GAME_DATA} 
            visitedIds={gameState.visitedIds}
            onSelectQuestion={handleSelectQuestion}
          />
        ) : (
          <QuestionView 
            question={gameState.currentQuestion}
            isAnswerVisible={gameState.isAnswerVisible}
            onShowAnswer={handleShowAnswer}
            onClose={handleCloseQuestion}
          />
        )}
      </main>

      {/* Score Board - Fixed at bottom */}
      <footer className="h-28 bg-blue-950 border-t border-white/20 p-4 shrink-0">
        <ScoreBoard 
          scores={gameState.scores} 
          onUpdateScore={updateScore}
          activeQuestion={gameState.currentQuestion}
        />
      </footer>
    </div>
  );
};

export default App;
