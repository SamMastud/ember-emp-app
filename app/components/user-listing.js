import Ember from 'ember';

export default Ember.Component.extend({
    isWide: false,
    actions: {
        toggleModal() {
            this.toggleProperty('isShowingModal');
        }
      }
});
