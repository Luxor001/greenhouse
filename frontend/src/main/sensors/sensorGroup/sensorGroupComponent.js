import React from 'react';

function SensorGroupComponent(props) {

	const group = props.sensorGroup;
	return (<>
			<aside class="VFlex-container">
				<div>
					{group.name}
				</div>
			
				<div>
					{group.description}
				</div>
			</aside>
			<div>
				<h1>sensors component</h1>
			</div>
		</>
	);
} 

export default SensorGroupComponent;