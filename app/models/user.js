import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),
  age: validator('presence', true),
  city: validator('presence', true),
  status: validator('presence', true),
    email: [
      validator('presence', true),
      validator('format', { type: 'email' })
    ]
  });

export default DS.Model.extend(Validations,{
    name: DS.attr('string'),
    age: DS.attr('string'),
    city: DS.attr('string'),
    status: DS.attr('string'),
    image: DS.attr('string'),
    email: DS.attr('string'),
    address: DS.attr()
});