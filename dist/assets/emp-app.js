"use strict";



define("emp-app/adapters/application", ["exports", "ember-data"], function (exports, _emberData) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPIAdapter.extend({
        host: "http://localhost:3000"
    });
});
define('emp-app/app', ['exports', 'emp-app/resolver', 'ember-load-initializers', 'emp-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  // Ember.MODEL_FACTORY_INJECTIONS = true;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('emp-app/components/user-listing', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('emp-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('emp-app/helpers/app-version', ['exports', 'emp-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('emp-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('emp-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('emp-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'emp-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('emp-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('emp-app/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('emp-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('emp-app/initializers/export-application-global', ['exports', 'emp-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('emp-app/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('emp-app/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('emp-app/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("emp-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('emp-app/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        name: _emberData.default.attr(),
        type: _emberData.default.attr(),
        age: _emberData.default.attr(),
        city: _emberData.default.attr(),
        status: _emberData.default.attr(),
        image: _emberData.default.attr(),
        email: _emberData.default.attr(),
        address: _emberData.default.attr()
    });
});
define('emp-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('emp-app/router', ['exports', 'emp-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('users');
  });

  exports.default = Router;
});
define('emp-app/routes/about', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('emp-app/routes/contact', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('emp-app/routes/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {
            this.replaceWith('users');
        }
    });
});
define('emp-app/routes/users', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model() {
            return this.store.findAll('user');
        }
    });
});
define('emp-app/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPISerializer.extend({});
});
define('emp-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("emp-app/templates/about", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4Mv6aZ+s", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"jumbo\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"right tomster\"],[13],[14],[0,\"\\n  \"],[11,\"h2\",[]],[13],[0,\"About Super Rentals\"],[14],[0,\"\\n  \"],[11,\"p\",[]],[13],[0,\"\\n    The Super Rentals website is a delightful project created to explore Ember.\\n    By building a property rental site, we can simultaneously imagine traveling\\n    AND building Ember applications.\\n  \"],[14],[0,\"\\n\"],[6,[\"link-to\"],[\"contact\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    Contact Us\\n\"]],\"locals\":[]},null],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "emp-app/templates/about.hbs" } });
});
define("emp-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HgNHS1gE", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"menu\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"index\"],null,{\"statements\":[[0,\"      \"],[11,\"h1\",[]],[13],[0,\"\\n        \"],[11,\"em\",[]],[13],[0,\"SuperRentals\"],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"links\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"about\"],null,{\"statements\":[[0,\"        About\\n\"]],\"locals\":[]},null],[6,[\"link-to\"],[\"contact\"],null,{\"statements\":[[0,\"        Contact\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"body\"],[13],[0,\"\\n    \"],[1,[26,[\"outlet\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "emp-app/templates/application.hbs" } });
});
define("emp-app/templates/components/user-listing", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "L8reWuR3", "block": "{\"statements\":[[1,[33,[\"log\"],[\"usercda\",[28,[\"user\"]]],null],false],[0,\"\\n\"],[11,\"article\",[]],[15,\"class\",\"listing\"],[13],[0,\"\\n  \"],[11,\"img\",[]],[16,\"src\",[34,[[28,[\"user\",\"image\"]]]]],[15,\"alt\",\"\"],[13],[14],[0,\"\\n  \"],[11,\"h3\",[]],[13],[1,[28,[\"user\",\"name\"]],false],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"detail\"],[13],[0,\"\\n    \"],[11,\"span\",[]],[13],[0,\"Age:\"],[14],[0,\" \"],[1,[28,[\"user\",\"age\"]],false],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"detail\"],[13],[0,\"\\n    \"],[11,\"span\",[]],[13],[0,\"status:\"],[14],[0,\" \"],[1,[28,[\"user\",\"status\"]],false],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"detail\"],[13],[0,\"\\n    \"],[11,\"span\",[]],[13],[0,\"Location:\"],[14],[0,\" \"],[1,[28,[\"user\",\"city\"]],false],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"detail\"],[13],[0,\"\\n    \"],[11,\"span\",[]],[13],[0,\"Email:\"],[14],[0,\" \"],[1,[28,[\"user\",\"email\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "emp-app/templates/components/user-listing.hbs" } });
});
define("emp-app/templates/contact", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ep6mWCfD", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"jumbo\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"right tomster\"],[13],[14],[0,\"\\n  \"],[11,\"h2\",[]],[13],[0,\"Contact Us\"],[14],[0,\"\\n  \"],[11,\"p\",[]],[13],[0,\"Super Rentals Representatives would love to help you\"],[11,\"br\",[]],[13],[14],[0,\"choose a destination or answer\\n    any questions you may have.\"],[14],[0,\"\\n  \"],[11,\"p\",[]],[13],[0,\"\\n    Super Rentals HQ\\n    \"],[11,\"address\",[]],[13],[0,\"\\n      1212 Test Address Avenue\"],[11,\"br\",[]],[13],[14],[0,\"\\n      Testington, OR 97233\\n    \"],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"tel:503.555.1212\"],[13],[0,\"+1 (503) 555-1212\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"mailto:superrentalsrep@emberjs.com\"],[13],[0,\"superrentalsrep@emberjs.com\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[6,[\"link-to\"],[\"about\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    About\\n\"]],\"locals\":[]},null],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "emp-app/templates/contact.hbs" } });
});
define("emp-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rehLc/Ds", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "emp-app/templates/index.hbs" } });
});
define("emp-app/templates/users", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aD4cDrIL", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"jumbo\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"right tomster\"],[13],[14],[0,\"\\n  \"],[11,\"h2\",[]],[13],[0,\"Welcome!\"],[14],[0,\"\\n  \"],[11,\"p\",[]],[13],[0,\"We hope you find exactly what you're looking for in a place to stay.\"],[14],[0,\"\\n\"],[6,[\"link-to\"],[\"about\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    About Us\\n\"]],\"locals\":[]},null],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"content\"]]],null,{\"statements\":[[0,\" \"],[1,[33,[\"log\"],[\"saa\",[28,[\"item\",\"firstObject\"]]],null],false],[0,\"\\n  \"],[1,[33,[\"user-listing\"],null,[[\"user\"],[[28,[\"item\",\"_data\"]]]]],false],[0,\"\\n\"]],\"locals\":[\"item\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "emp-app/templates/users.hbs" } });
});


define('emp-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'emp-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("emp-app/app")["default"].create({"name":"emp-app","version":"0.0.0+ebc836e4"});
}
//# sourceMappingURL=emp-app.map
