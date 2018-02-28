import Component from '@ember/component';

export default Component.extend({
    showRemoveConfirm: false,
    showSaveConfirm: false,
    showValidationErrors: false,
    actions: {
        validateAndSaveConfirm(user){
            user.validate().then(({ validations }) => {
                if(validations.get('isValid')) {
                    this.set('showSaveConfirm', true);
                    return true;
                } else{
                    this.set('showValidationErrors', true);
                    this.set('showSaveConfirm', false);
                    return false;
                }   
            }).catch((error) => {
                alert('unable to create new user!', error);
            });
        }
    }
});
