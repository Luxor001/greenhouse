import './App.css';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from './menu/Menu';

function App() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="App">
        <Menu></Menu>
    </div>
  );
}

export default App;
