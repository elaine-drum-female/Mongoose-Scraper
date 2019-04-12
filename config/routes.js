module.exports = function(router) {
    // This route takes you to homepage
    router.get("/", function(req, res) {
        res.render("home");
    });
    // Route takes you to the saved page
    router.get("/saved", function(req, res) {
        res.render("saved");
    });
}