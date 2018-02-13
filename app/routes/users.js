import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
    model() {
		return hash({
            users: this.store.findAll('user'),
            user: null
		});
	},
    actions: {
        toggleModal(self, model) {
            let newuser = this.store.createRecord('user')
			model.user = newuser;
            self.toggleProperty('isShowingModal');
        },
        saveUser(self, user) {
            user.save()
            self.toggleProperty('isShowingModal');
        }
    }
});
