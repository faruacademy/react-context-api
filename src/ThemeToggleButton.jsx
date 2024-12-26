import  { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        margin: '20px auto',
        display: 'block',
        padding: '10px 20px',
        fontSize: '16px',
      }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton;
