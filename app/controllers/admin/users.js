import Ember from "ember";

export default Ember.Controller.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    users_plain: [],
    role: "participants",

    load_users: function() {
        var self = this;
        var params;

        self.set("filter_in_progress", true);
        if (self.get("role")) {
            params = { "filter": self.get("role") };
        } else {
            params = {};
        }

        self.get("store").query("user", params).then(function(p) {
            self.set("users_plain", p);
            self.set("filter_in_progress", false);
        }, function(error) {
            console.log(error);
            self.set("filter_in_progress", false);
            self.set("users_plain", []);
            alert("Nepodařilo se načíst data ze serveru : "+error.message);
        });

    },

    users: Ember.computed("users_plain", function(){
        var currentRole;
        return this.get("users_plain").sortBy("role", "first_name", "last_name").map(function(user) {
            user.set("first_in_role", currentRole !== user.get("role"));
            if (currentRole !== user.get("role")) {
                currentRole = user.get("role");
            }

            if (user.get("role") === "admin") { user.set("role_group", "Administrátoři"); }
            else if (user.get("role") === "org") { user.set("role_group", "Organizátoři"); }
            else if (user.get("role") === "participant") { user.set("role_group", "Řešitelé"); }
            else if (user.get("role") === "tester") { user.set("role_group", "Testeři"); }
            else { user.set("role_group", user.get("role")); }

            return user;
        });
    }),

    actions: {
        'filter': function() {
            this.load_users();
        },

        'user-delete': function(user) {
            if(!confirm("Opravdu odstranit uživatele " + user.get("full_name") + "?")) {
                return;
            }

            user.set("deleting", true);
            this.get("users_plain").removeObject(user);
            this.get("users").removeObject(user);
            user.destroyRecord(); // DELETE to /users/1
        },

    }
});
