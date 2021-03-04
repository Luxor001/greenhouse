import React from 'react';
import { fakeSensorsGroups } from '../../shared/fakeData/data';
import SensorGroupComponent from './sensorGroup/sensorGroupComponent'

//TODO: get sensors from network...	
function SensorsComponent(props) {

	console.log(fakeSensorsGroups);
	return (
		<div>
			{fakeSensorsGroups.groups.map(group => {<>
				<h1>group!</h1>
				<SensorGroupComponent group={group}></SensorGroupComponent>	
				</>
			})}
			<h1>sensors component</h1>
		</div>
	);
}

export default SensorsComponent;