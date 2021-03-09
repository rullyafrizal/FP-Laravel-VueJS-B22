import Vue from 'vue'
import Vuex from 'vuex'
import transactions from './stores/transactions.js'
import alert from './stores/alert.js'
import auth from './stores/auth.js'
import dialog from './stores/dialog.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        transactions,
        alert,
        auth,
        dialog
    }
})


