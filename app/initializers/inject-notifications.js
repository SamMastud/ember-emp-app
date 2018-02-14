export function initialize(app) {
	app.inject('route', 'notifications', 'service:notification-messages');
	app.inject('component', 'notifications', 'service:notification-messages');
}

export default {
	name: 'inject-notifications',
	initialize
};
