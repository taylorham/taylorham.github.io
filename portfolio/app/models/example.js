import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr(),
  image: DS.attr(),
  images: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  tags: DS.attr()
});
