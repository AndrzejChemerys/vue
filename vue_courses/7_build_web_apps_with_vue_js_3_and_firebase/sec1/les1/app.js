const app = Vue.createApp({
    // data, functions
    // template: '<h2> I am the template</h2>'

    data(){
        return{
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            showBooks: true,
            books: [
                {title: 'man of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false},
                {title: 'the final empire', author: 'patrick rothfuss', img: 'assets/3.jpg', isFav: true},
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
        toggleIsFav(book){
            book.isFav=!book.isFav
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
});

app.mount('#app');