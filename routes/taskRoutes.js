const taskRoutes=(req,res)=>{
    if(req.method == 'GET'){
      getTasks(req,res);

    }
    else if (res.method == POST){
        // res.end('create a new task');
        createTask(req,res);

    }else if(req.method ==='PATCH'){
        // res.end('update a task');
        updateTask(req,res);

    }else if (req.methode ==='DELETE'){
        // res.end('Delete a task');
        delateTask(req,res);
    }else{
        res.whriteHead(404,'not found',{'content-type':'application/json'})
            res.end(json.stringify({
                massage:'page not found'
        }));

    }
}
module.exports=taskRoutes;