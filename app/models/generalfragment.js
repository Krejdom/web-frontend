import DS from 'ember-data';
import MF from 'model-fragments';

export default MF.Fragment.extend({
  //files: MF.fragmentArray('filefragment')
  files: DS.attr("files-list"),
});
