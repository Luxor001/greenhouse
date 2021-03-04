import './App.scss';
import React from 'react';
import Menu from './menu/Menu';
import MainComponent from './main/MainComponent';

function App() {
	return (
		<div className="flex h100p">
			<div class="HFlex-container">
				<Menu class="h100p"></Menu>
				<MainComponent></MainComponent>
			</div>
		</div>
	);
}
	
export default App;
