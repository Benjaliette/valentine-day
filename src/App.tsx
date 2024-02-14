import { useState } from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [isQuestion, setIsQuestion] = useState(true);

  const handleClick = ({onClick}: any) => {
    setIsQuestion((isQuestion: boolean) => !isQuestion);
  }

  return (
    <div className="container mx-auto my-page">
      <Header question={isQuestion} />
      <Main  question={isQuestion} onClick={handleClick} />
    </div>
  );
}

export default App;
