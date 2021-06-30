import React from 'react';
import './App.scss';
import Main from './components/Main';
import Title from './components/Title'

function App() {
  document.title = 'Todo App'
  return (
    <div className="app">
      <Title />
      <Main />
    </div>
  );
}

// class App extends React.Component {
  
//   render() {
//     return <div>Đây là class component</div>
//   }
// }

export default App;
