// A restful api of wikipedia where peaople can get articles to read
// people can add articles here also, they can update(edit) articles and delete.

// requiring diffrent modules
const express = require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');




const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));




// connecting mongoose with node on localhost
mongoose.connect('mongodb://127.0.0.1:27017/wikiDB',
{             // connecting mongoose with node
 useNewUrlParser: true,

 useUnifiedTopology: true
}, function(err){
 if(err){
   console.log(err);
 }
 else{
   console.log("successfully connected to database.");
 }
}
);



// creating schema
const articleSchema = {
  title: String,
  content : String
}


// creating model(collection)
const articles = mongoose.model('articles', articleSchema);




// method of taking express route
//////////////////////////////Targeting All Articles////////////////////////
app.route('/articles')
.get(function(req, res){
   articles.find(function(err, foundArticles){
     if(err){
       console.log(err);
     }else
     {
       res.send(foundArticles);
     }
   })
})
.post(function(req, res){
  const newArticle = new articles({
    title : req.body.title,
    content : req.body.content
  });
  newArticle.save(function(err){
    if(!err){
      res.send("successfully added new item.");
    }else{
      res.send(err);
    }
  });
})
.delete(function(req, res){
  articles.deleteMany(function(err){
    if(err){
      res.send(err);
    }else{
      res.send("successfully deleted all items")
    }
  });
});






///////////////////////////////Targeting Specific Article///////////////////////
app.route('/articles/:articleTitle')
.get(function(req, res){
  articles.findOne({title: req.params.articleTitle}, function(err, foundArticle){

  if(err){
    res.send("Item is not present")
  }  else{
    res.send(foundArticle);
  }
  });

})
.put(function(req, res){
  articles.update({title: req.params.articleTitle},{title:req.body.title, content: req.body.content}, function(err){
    if(!err){
      res.send("updated")
    }else{
      res.send(err);
    }
  }
)
})
.patch(function(req, res){
  articles.update({title: req.params.articleTitle}, {$set:req.body}, function(err){
    if(!err){
      res.send('successfully updated')
    }else{
      console.log(err);
    }
  } );
})
.delete(function(req, res){
  articles.deleteOne({title: req.params.articleTitle}, function(err){
    if(!err){
      res.send('Deleted')
    }else{
      res.send(err)
    }
  });
});







// hosting api locally on port 3000
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
