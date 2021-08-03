exports.getPosts = (req, res, next)=> {
    res.status(200).json({
       "posts" : [{
        "score" : 6,
        "customerId" : 100
       },
       {
        "score" : 9,
        "customerId" : 200
       }
    ]
    })
};

exports.createPosts = (req, res, next) =>{
    const title = req.body.title;
    const content = req.body.content;
    //create post in db

    res.status(201).json({
        message :"Created the post succesfully",
        post :{
            id: new Date().toISOString(),
            title : title
        }
    })
};

