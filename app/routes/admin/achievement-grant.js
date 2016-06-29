import Ember from "ember";
import ResetScroll from '../../mixins/reset-scroll';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(ResetScroll, AuthenticatedRouteMixin, {
    model: function() {
        return Ember.RSVP.hash({
            tasks: this.store.findAll("task"),
            users: this.store.findAll("user"),
            achievements: this.store.findAll("achievement"),
        });
    },
    title: "KSI: Udělit trofej",
    actions: {
        willTransition: function() {
            this.controller.set('sel_users', []);
            this.controller.set('achievement', undefined);
            this.controller.set('grant_status', "");
            this.controller.set('grant_error', "");
        }
    }
});
