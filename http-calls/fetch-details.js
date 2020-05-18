module.exports = function(server) {
    server.post('/london', function(req, res) {
        res.status(200)
            .send({
                "abd": "xyz",
                "123": "48585"
            });
    });
}