import Ember from "ember";
import ResetScroll from '../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
	model: function() {
		return Ember.RSVP.hash({
			waves: this.store.findAll("wave"),
			users: this.store.query("user", { filter: "organisators" } )
		});
	},
	title: "KSI: Správa vln"
});
