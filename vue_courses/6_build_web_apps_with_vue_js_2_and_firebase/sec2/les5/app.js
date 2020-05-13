new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        wage: 0
    },
    methods: {
        changeWage(amount) {
            this.wage += amount;
        }
    }
})