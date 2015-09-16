import DS from "ember-data";

export default DS.Model.extend( {
    first_name: DS.attr("string"),
    last_name: DS.attr("string"),
    email: DS.attr("string"),

    addr_street: DS.attr("string"),
    addr_city: DS.attr("string"),
    addr_zip: DS.attr("string"),
    addr_country: DS.attr("string"),

    school_name: DS.attr("string"),
    school_street: DS.attr("string"),
    school_city: DS.attr("string"),
    school_zip: DS.attr("string"),
    school_country: DS.attr("string"),
    school_finish: DS.attr("number"),

    description: DS.attr("string"),
    tshirt_size: DS.attr("string")
});