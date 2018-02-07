import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    type: DS.attr(),
    age: DS.attr(),
    city: DS.attr(),
    status: DS.attr(),
    image: DS.attr(),
    email: DS.attr(),
    address: DS.attr()
});
