import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  // State should be at top level, so it can be used in other components
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appointment",
      day: 'Feb 5th at 2:30',
    },
    {
      id: 2,
      text: 'School meeting',
      day: 'Feb 10th at 5:30',
    },
    {
      id: 3,
      text: 'Vet appointment',
      day: 'March 5th at 12:30',
    },
  ]);

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
