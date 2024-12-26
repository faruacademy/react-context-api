import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      style={{
        padding: '10px',
        textAlign: 'center',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <h1>Theme Toggler App</h1>
      <p>Current Theme: {theme}</p>
    </header>
  );
};

export default Header;
