var x=require("express");

var app=x();

app.use(x.static("public"));

app.get("/",function(req,res){
    res.render("index.ejs");
});

app.get("/edit",function(req,res){
    res.render("edit.ejs");
});


app.listen(process.env.PORT,process.env.IP,function(){
    
    console.log("Started");
});