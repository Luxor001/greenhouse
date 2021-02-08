import { MenuStructure } from './MenuStructure';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import EcoIcon from '@material-ui/icons/Eco';
import React from 'react';
import * as classes from './Menu.module.css';
console.log(classes);

function MenuComponent(props) {
	const { window } = props;

	return (
		<Drawer
			container={window !== undefined ? () => window().document.body : undefined}
			variant="temporary"
			anchor="left"
			open={true}
			width={300}
			classes={{
				paper: classes.drawer
			}}
			style={classes.drawer}
			ModalProps={{
				keepMounted: true,
			}}>
			<header className={classes.header}>
				<EcoIcon />
				<span>Greenhouse</span>				
			</header>
			<Divider />
			<List>
				{MenuStructure.map((item) => {
					return <ListItem button key={item.text}>
						<ListItemIcon><React.Fragment>{item.icon}</React.Fragment></ListItemIcon>
						<ListItemText primary={item.text} />
					</ListItem>
				})}
			</List>
			<Divider />
		</Drawer>
	);
}

export default MenuComponent;
