const  express = require('express');
const path = require('path');

// Init app 
const app = express();

// laod view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// home route
app.get('/', (req, res) => {
    let posts = [
        {
            id:1,
            title:"Posting about redux",
            author:'Rafeeq Syed Amjad',
            body:'This is an post about redux'
        },
        {
            id: 2,
            title: "Posting about Express",
            author: 'Keshav',
            body: 'This is an post about redux'
        },
        {
            id: 3,
            title: "Posting about Nodejs",
            author: 'Jatin',
            body: 'This is an article about Nodejs'
        },
    ];
    res.render('index', {
        title: 'post',
        posts: posts
    })
})

// add Route
app.get('/post/view', (req, res) => {
    res.render('view_post', {
        title: 'View post'
    })
});


// start server
app.listen(3000, function(){
    console.log('Sever is running on port 3000...');
});