import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
    model() {
		return hash({
            users: this.store.findAll('user'),
            user: this.store.createRecord('user')
		});
	},
    actions: {
        toggleModal(self) {
            self.set('isShowingModal',true);
        },
        saveUser(self, user) {
            user.save()
            self.set('isShowingModal',false);
            alert('User Created Successful!');
        },
        editUser(self, user) {
            user.save()
            self.set('isShowingModal',false);
            alert('User details updated Successful!')
        }
    }
});
