import React from  "react";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expense = [
    {id:"e1",title:"Car Insurance",Amount:3031,Date:new Date(2023,1,5)},
    {id:"e2",title:"Everything",Amount:3031,Date:new Date(2023,1,7)},
    {id:"e3",title:"Something",Amount:3031,Date:new Date(2023,1,10)},
    {id:"e4",title:"Nothing",Amount:3031,Date:new Date(2023,1,18)} 
  ];
  return (
    <div className="App">
      <ExpenseItem title={expense[0].title} amount={expense[0].Amount} date={expense[0].Date}/>
      <ExpenseItem title={expense[1].title} amount={expense[1].Amount} date={expense[1].Date}/>
      <ExpenseItem title={expense[2].title} amount={expense[2].Amount} date={expense[2].Date}/>
      <ExpenseItem title={expense[3].title} amount={expense[3].Amount} date={expense[3].Date}/>
      



    </div>
  );
}

export default App;
