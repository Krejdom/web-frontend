import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service(),
    actions: {
        react: function() {
            this.set("is_reacting", !this.get("is_reacting"));
            this.set("content_error", undefined);
            this.set("response_text", "");
        },
        send: function() {
        	var self = this;

        	if(!this.get("response_text")) {
        		this.set("content_error", "Nelze odeslat prázdný příspěvek");
        		return;
        	}
        	this.set("content_error", undefined);
        	var post = this.get("store").createRecord("post", {
        		body: self.get("response_text"),
                parent: self.get("model"),
                thread: self.get("model.thread")
        	});

        	post.save().then(function() {
        		self.get("model.reaction").pushObject(post);
        		self.get("model").save().then(function() {
        			self.set("is_reacting", false);
        		}, function() {
        			self.set("content_error", "Nepodařilo se odeslat příspěvek");
        		});
        	});
        }
    },
    allow_edit: Ember.computed("session.current_user.organisator", "session.current_user.id", "model.author", function() {
        return this.get("session.current_user.organisator") && this.get("model.author") === 
            this.get("session.current_user");
    }),
    is_reacting: false,
    content_error: undefined
});
