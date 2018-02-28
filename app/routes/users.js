import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
    showValidationErrors: false,
    model() {
		return hash({
            users: this.store.findAll('user'),
            user: this.store.createRecord('user',{
                image: "https://goo.gl/ox5D9W",
                address:[
                    {
                        "type": "Current Address"
                    },
                    {
                        "type": "Permanant Address"
                    }
                ]
            })
		});
	},
    actions: {
        toggleModal(self) {
            self.set('showValidationErrors',false);
            self.set('isShowingModal',true);
        },
        saveUser(self, user) {
            user.validate().then(({ validations }) => {
                if(validations.get('isValid')) {
                    self.set('isShowingModal',false);
                    alert('User Created Successful!');
                    return user.save();
                }
            }).then(() => {
                self.set('showValidationErrors', true);
                return false;
            }).catch((error) => {
                alert('unable to create new user!', error);
            });
        },
        editUser(self, user) {
            self.set('showSaveConfirm', false);
            user.save();
            self.set('isShowingModal',false);
            alert('User details updated Successful!')
        },
        removeUser(self, user){
            self.set('showRemoveConfirm', false);
            user.destroyRecord();
            self.set('isShowingModal',false);
            alert('User Removed Successful!')
        }
    }
});
