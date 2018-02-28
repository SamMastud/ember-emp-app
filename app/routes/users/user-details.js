import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
    model(params) {
		return hash({
            user: this.get('store').findRecord('user', params.id)
		});
	},
});
