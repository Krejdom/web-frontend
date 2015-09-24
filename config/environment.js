/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ksi',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
    contentSecurityPolicy: {
        'default-src': "'none'",
        'script-src': "'self'",
        'font-src': "'self'",
        'connect-src': "'self' *",
        'img-src': "'self'",
        'style-src': "'self' *",
        'media-src': "'self'"
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV["simple-auth"] = {
        //authorizer: 'authenticator:basicauth',
        authorizer: 'simple-auth-authorizer:oauth2-bearer',
        store: 'simple-auth-session-store:local-storage'
      }

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: 'http://192.168.188.131:8000/v1/oauth2/auth'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.i18n = {
    defaultLocale: 'cs'
  };

  ENV["API_LOC"] = "http://localhost:3000";

  return ENV;
};
