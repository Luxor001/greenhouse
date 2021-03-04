import React from 'react';
import SensorsComponent from './sensors/sensorsComponent';
import ConfigComponent from './config/configComponent';
import {Route} from 'react-router-dom';
import DashboardComponent from './dashboard/dashboardComponent';

function MainComponent(props) {
	return (
		<div class="h100p flex-fill">
			<Route path="/dashboard" exact component={DashboardComponent}></Route>
			<Route path="/sensors"  exact component={SensorsComponent} ></Route>
			<Route path="/config" exact component={ConfigComponent}></Route>
		</div>
	);
}

export default MainComponent;