import { useState, useEffect } from 'react';
// React Router vs react-router-dom: https://stackoverflow.com/questions/42684809/react-router-vs-react-router-dom-when-to-use-one-or-the-other
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  // State should be at top level, so it can be used in other components
  const [tasks, setTasks] = useState([]);

  // The second arg is dependency array - "if present, effect will only activate if the values in the list change" for example if user changes. In the case of no dependencies, empty array should be passed
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch tasks from back end (JSON Server - db.json)
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  // Fetch single task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  // Add task
  const addTask = async (task) => {
    // Allow it to persist to backend
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    // Data that's returned is newly added task
    const data = await res.json();

    setTasks([...tasks, data]);

    // No longer needed since JSON Server automatically creates id
    // const id = Math.floor(Math.random() * 10000);
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path="/"
          exact
          // "The props are passed to the render prop method by the Route component. You can see this in the React Router source code. The props passed by the Route component have match, location, history, staticContext. If you want to use props from the parent component where you are defining the render props method, then you can omit the props argument." https://stackoverflow.com/questions/52070532/render-props-react-route
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No tasks to display.'
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
