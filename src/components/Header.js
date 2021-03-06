// type impt to create this with ES7 React Snippets extension
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

// Instead of (and using {props.title}): const Header = (props) => {
const Header = ({ title, onAdd, showAdd }) => {
  // useLocation hook allows you to look at route currently on
  const location = useLocation();

  return (
    <header className="header">
      {/* <h1 style={{ color: 'red', backgroundColor: '#000' }}>{title}</h1> */}
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          onClick={onAdd}
          text={showAdd ? 'Close' : 'Add'}
        />
      )}
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
