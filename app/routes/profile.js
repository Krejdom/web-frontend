import Ember from "ember";
import ResetScrollProtected from '../mixins/reset-scroll-protected';

export default Ember.Route.extend(ResetScrollProtected, {
    model: function() {
        this.store.unloadAll("profile");
        return this.store.find("profile", "");
    },

    afterModel: function(model) {
        this.set("session.current", model);
    },
    title: "KSI: Profil"
});
