import { nav } from "./nav.js"
console.log(nav)
new Vue({
    el: '#app',
    data() {
        return {
            nav: nav,
            currentLeftIndex: 0
        }
    },
    methods: {

    }

})