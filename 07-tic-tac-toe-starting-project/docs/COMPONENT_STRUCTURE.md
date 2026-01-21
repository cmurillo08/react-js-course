# Tic-Tac-Toe Component Structure

## Component Tree

```
App
├── Player (X)
├── Player (O)
├── GameOver (conditional - shown when winner or draw)
├── GameBoard
└── Log
```

## Detailed Hierarchy

```
App (Main Component)
│
├─── Players Container (ol#players)
│    ├── Player (symbol: X)
│    │   └── props: initialName, symbol, isActive, onChangeName
│    │
│    └── Player (symbol: O)
│        └── props: initialName, symbol, isActive, onChangeName
│
├─── GameOver (Conditional Render)
│    └── props: winner, onRestart
│
├─── GameBoard
│    └── props: onSelectSquare, board
│
└─── Log
     └── props: turns
```

## Component Descriptions

### App
- **Purpose**: Main component managing game state and logic
- **State**:
  - `players`: Object storing player names (X and O)
  - `gameTurns`: Array of game moves
- **Responsibilities**:
  - Derive active player
  - Derive game board state
  - Determine winner
  - Handle square selection
  - Handle game restart
  - Handle player name changes

### Player
- **Purpose**: Display and manage individual player information
- **Props**:
  - `initialName`: Player's starting name
  - `symbol`: Player symbol (X or O)
  - `isActive`: Boolean indicating if player's turn
  - `onChangeName`: Callback for name changes
- **Features**: Edit/Save player name functionality

### GameBoard
- **Purpose**: Render the 3x3 tic-tac-toe grid
- **Props**:
  - `onSelectSquare`: Callback when a square is clicked
  - `board`: 3x3 array representing game board state
- **Functionality**: Displays playable squares and handles user interactions

### GameOver
- **Purpose**: Display game result and rematch option
- **Props**:
  - `winner`: Winner player name (null if draw)
  - `onRestart`: Callback to restart the game
- **Display**:
  - Shows winner message if there's a winner
  - Shows draw message if no winner and board full
  - Provides "Rematch!" button

### Log
- **Purpose**: Display move history
- **Props**:
  - `turns`: Array of game moves
- **Display**: Lists all moves in chronological order with player and position information

## File Structure

```
src/
├── App.jsx
├── Components/
│   ├── GameBoard.jsx
│   ├── GameOver.jsx
│   ├── Log.jsx
│   └── Player.jsx
├── assets/
├── index.css
├── index.jsx
└── winning-combinations.js
```
