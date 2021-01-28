import { useState } from 'react';

const Tasks = () => {
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
    // To add to tasks, would do: (with new data in object)
    // setTasks([...tasks, {}])
    // You couldn't do tasks.push() because state is immutable; recreate it and send it down - don't directly change; it's one-way data
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
