var orm = require('../config/orm.js');

module.exports = (app)=>{
    app.get("/", (req, res)=>{
       orm.selectAll((err, data)=>{
        if(err) console.log(err)
        var dataSet = [];
        // console.log(data.length);
        // console.log(data);
        var results = data;
        res.render("index", {
            data: results
        });
       });
    });
    app.get("/api/add", (req, res)=>{
        var id = req.params.id;
        orm.dining(id);
        res.redirect("/");
    });
    app.get("/api/dining/:id", (req, res)=>{
        var id = req.params.id;
        orm.dining(id);
        res.redirect("/");
    });
    app.get("/api/devoured/:id", (req, res)=>{
        var id = req.params.id;
        orm.devoure(id);
        res.redirect("/");
    });
    app.get("/api/delete/:id", (req, res)=>{
        var id = req.params.id;
        orm.delete(id);
        res.redirect("/");
    });
    app.get("/api/favorite/:id", (req, res)=>{
        var id = req.params.id;
        orm.favorite(id);
        res.redirect("/");
    });
    app.post("/api/new-burger/:burgerName", (req, res)=>{
        var new_burger = req.params.burgerName;
        orm.newBurger(new_burger);
        res.redirect("/");
    });

}
