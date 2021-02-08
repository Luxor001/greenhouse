import DashboardIcon from '@material-ui/icons/Dashboard';
import AcUnitIcon  from '@material-ui/icons/AcUnit';
import SettingsIcon from '@material-ui/icons/Settings';

export const MenuStructure = [
	{
		text: 'Dashboard',
		route: '/',
		icon: (<DashboardIcon />)
	},
	{
		text: 'Sensors',
		route: '/sensors',
		icon: (<AcUnitIcon />)
	},
	{
		text: 'Settings',
		route: '/settings',
		icon: (<SettingsIcon />)
	}
];