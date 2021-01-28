const Tasks = ({ tasks }) => {
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
