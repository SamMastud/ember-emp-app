import Component from '@ember/component';

export default Component.extend({
    isWide: false,
    currentUserId: 1,
    showRemoveConfirm: false,
    showSaveConfirm: false,
    actions: {
        toggleModal() {
            this.toggleProperty('isShowingModal');
        }
    }
});
