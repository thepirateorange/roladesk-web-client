// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios';
import router from './router'
import { store } from './store';
import VueSocketio from 'vue-socket.io'
import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

require('./assets/css/animate.css/animate.min.css')
require('./assets/css/glyphicons/glyphicons.css')
require('./assets/css/font-awesome/css/font-awesome.min.css')
require('./assets/css/material-design-icons/material-design-icons.css')
require('./assets/css/ionicons/css/ionicons.min.css')
require('./assets/css/simple-line-icons/css/simple-line-icons.css')
require('./assets/css/bootstrap/dist/css/bootstrap.min.css')
require('./assets/css/styles/app.css')
require('./assets/css/styles/style.css')
require('./assets/css/styles/font.css')
//require('./assets/app.js')


//require('./assets/libs/jquery/dist/jquery.js')
//require('./assets/libs/tether/dist/js/tether.min.js')
require('./assets/libs/bootstrap/dist/js/bootstrap.js')
require('./assets/libs/jQuery-Storage-API/jquery.storageapi.min.js')
require('./assets/libs/PACE/pace.min.js')
//require('./assets/libs/jquery-pjax/jquery.pjax.js')
require('./assets/libs/blockUI/jquery.blockUI.js')
require('./assets/libs/jscroll/jquery.jscroll.min.js')
require('./assets/scripts/config.lazyload.js')
require('./assets/scripts/ui-load.js')
//require('./assets/scripts/ui-jp.js')
require('./assets/scripts/ui-include.js')
require('./assets/scripts/ui-device.js')
require('./assets/scripts/ui-form.js')
require('./assets/scripts/ui-modal.js')
require('./assets/scripts/ui-nav.js')
require('./assets/scripts/ui-list.js')
//require('./assets/scripts/ui-screenfull.js')
require('./assets/scripts/ui-scroll-to.js')
require('./assets/scripts/ui-toggle-class.js')
require('./assets/scripts/ui-taburl.js')
require('./assets/scripts/app.js')
require('./assets/scripts/ajax.js')

Vue.use(VueToastr, {
    defaultPosition: 'toast-top-right',
    defaultType: 'info',
    defaultTimeout: 3000
})

Vue.config.productionTip = false

Vue.use(VueSocketio, 'http://server.roladesk.teamorange.tech:8081')

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
