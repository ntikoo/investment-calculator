import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const inputIsValid = userInput.duration > 0
  const handleChange = (initialIdentifier, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [initialIdentifier]: +value };
    });
  };
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <h5 className="center">Please enter a duration greater than zero</h5>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
