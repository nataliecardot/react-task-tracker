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

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to display.'
      )}
    </div>
  );
}

export default App;
