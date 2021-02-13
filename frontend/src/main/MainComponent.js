import React from 'react';
import SensorsComponent from './sensors/sensorsComponent';
import ConfigComponent from './config/configComponent';
import {Route} from 'react-router-dom';

function MainComponent(props) {
	return (
		<div>
			<Route path="/sensors"  exact component={SensorsComponent} ></Route>
			<Route path="/config" exact component={ConfigComponent}></Route>
		</div>
	);
}

export default MainComponent;