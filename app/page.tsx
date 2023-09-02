import Expenses from '../components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-sans               "> font-sans        </h1>
      <h1 className="text-xl font-sans font-thin     "> font-sans   thin </h1>
      <h1 className="text-xl font-sans font-bold     "> font-sans   bold </h1>

      <h1 className="text-xl font-mono               "> font-mono        </h1>
      <h1 className="text-xl font-mono font-thin     "> font-mono   thin </h1>
      <h1 className="text-xl font-mono font-bold     "> font-mono   bold </h1>
          
      <h1 className="text-xl font-poppins            "> poppins          </h1>
      <h1 className="text-xl font-poppins font-thin  "> poppins     thin </h1>
      <h1 className="text-xl font-poppins font-bold  "> poppins     bold </h1>
          
      <h1 className="text-xl font-yolo               "> yolo             </h1>
      <h1 className="text-xl font-yolo font-thin     "> yolo        thin </h1>
      <h1 className="text-xl font-yolo font-bold     "> yolo        bold </h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
