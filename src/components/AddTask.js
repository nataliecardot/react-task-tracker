import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    // So it doesn't submit to a page
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    // Calls addTask in App.js (instance of AddTask has onAdd={addTask})
    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day and Time</label>
        <input
          type="text"
          id="day"
          placeholder="Add day and time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control  form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          id="reminder"
          placeholder="Add task"
          className="btn btn-block"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
