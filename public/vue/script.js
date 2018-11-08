let app = new Vue({
    el: '#app',
    data: {
        preview: false,
        firstName: '',
        lastName: '',
        mail: '',
        phone: '',
        guests: []
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    }
})