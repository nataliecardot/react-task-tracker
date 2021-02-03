// type impt to create this with ES7 React Snippets extension
import PropTypes from 'prop-types';
import Button from './Button';

// Instead of (and using {props.title}): const Header = (props) => {
const Header = ({ title, onAdd }) => {
  return (
    <header className="header">
      {/* <h1 style={{ color: 'red', backgroundColor: '#000' }}>{title}</h1> */}
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: '#000',
// };

export default Header;
