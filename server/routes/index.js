let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home', page: 'home'});
  });
  
  /* GET home page. */
  router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Home', page: 'home'});
  });

/* GET About Me. */
router.get('/about', function(req, res, next ) {
    res.render('index', { title: 'About Me', page: 'about'});
    //res.sendFile(path.join(__dirname+'/about_me.ejs'));
  });
  
  /* GET Projects page. */
  router.get('/projects', function(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects'});
  });
  
  /* GET Services page. */
  router.get('/services', function(req, res, next) {
    res.render('index', { title: 'Services', page: 'services'});
  });
  
  /* GET Contact Me. */
  router.get('/contact', function(req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact'});
  });

/* GET Route for displaying the Login page */
router.get("/login", indexController.displayLoginPage);


/* POST Route for processing the Login page */
router.post("/login", indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get("/register", indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);

module.exports = router;
