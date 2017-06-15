// Add babel-polyfill to provide ES2015 support in IE
// See: http://babeljs.io/docs/usage/polyfill/
import 'babel-polyfill';

// Libs
require('script-loader!../node_modules/angular/angular.min.js');
require('script-loader!../node_modules/angular-route/angular-route.min.js');

require('script-loader!../node_modules/moment/moment.js');
require('script-loader!../node_modules/angular-moment/angular-moment.js');

// App Source
require('./app');
require('./angularjs-components/characters-page/characters-page');

// Bootstrap the app
require('./polyfills');
require('./bootstrap');
