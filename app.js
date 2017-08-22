
// builtin
var fs = require('fs');

// 3rd party
var express = require('express');
var hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');


// set the view engine to use handlebars
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

    res.locals = {
        business_name: 'Business Name',
    }

    res.render('index');
});

// about page
app.get("/about",function(req,res){
  	res.render('pages/about');
});

// services page
app.get("/services",function(req,res){
  	res.render('pages/services');
});

// contact page
app.get("/contact",function(req,res){
  	res.render('pages/contact');
});

// portfolio-1 page
app.get("/portfolio-1",function(req,res){
  	res.render('pages/portfolio-1');
});

// portfolio-2 page
app.get("/portfolio-2",function(req,res){
  	res.render('pages/portfolio-2');
});

// portfolio-3 page
app.get("/portfolio-3",function(req,res){
  	res.render('pages/portfolio-3');
});

// portfolio-4 page
app.get("/portfolio-4",function(req,res){
  	res.render('pages/portfolio-4');
});

// portfolio-single-item page
app.get("/portfolio-single-item",function(req,res){
  	res.render('pages/portfolio-single-item');
});

// blog-home-1 page
app.get("/blog-home-1",function(req,res){
  	res.render('pages/blog-home-1');
});

// blog-home-2 page
app.get("/blog-home-2",function(req,res){
  	res.render('pages/blog-home-2');
});


// blog-post page
app.get("/blog-post",function(req,res){
  	res.render('pages/blog-post');
});


// full-width page
app.get("/full-width",function(req,res){
  	res.render('pages/full-width');
});


// sidebar page
app.get("/sidebar",function(req,res){
  	res.render('pages/sidebar');
});

// faq page
app.get("/faq",function(req,res){
  	res.render('pages/faq');
});

// faq page
app.get("/404",function(req,res){
  	res.render('pages/404');
});

// faq page
app.get("/pricing",function(req,res){
  	res.render('pages/pricing');
});


app.listen(3000);

