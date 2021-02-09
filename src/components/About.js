import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      {/* Using Link instead of a element so page doesn't reload */}
      <Link to="/">Go back</Link>
    </div>
  );
};

export default About;
