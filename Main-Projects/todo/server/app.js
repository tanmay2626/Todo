
const express = require('express')
const bodyparser = require('body-parser')
const cors  = require('cors')
const mongoose = require('mongoose')
const app = express()

const myList = [ ];

app.use(bodyparser.urlencoded({ extended  :true }))
app.use(cors())
app.use(bodyparser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });

mongoose.connect('mongodb://localhost:27017/dbtodo')

const TaskSchema = new mongoose.Schema({
    task : String
})

const ListSchema = new mongoose.Schema({
    name : String,
    list : [TaskSchema]
})

const Task =  mongoose.model('Task',TaskSchema)
const List =  mongoose.model('List',ListSchema)

const DefaultTask = new Task({
    task : 'Hello! Welcome to Todo'
})

// const myList = new List({
//     name : 'Health',
//     list : DefaultTask
// })
// myList.save()


app.get('/',(req,res)=>{
    
    List.find((err,foundList)=>{
        if(!err){
            res.json(foundList)
        }
    })
    
})

app.get('/collections',(req,res)=>{
    List.find((err,foundList)=>{
        if(!err){
            res.json(foundList)
        }
    })  
})

app.post('/collections',(req,res)=>{
    const listID = req.body.idName;
    myList.push(listID)
})

app.get('/collection',(req,res)=>{
     const getList = myList[myList.length-1];
     List.findOne({ _id : getList },(err,foundList)=>{
        if(foundList){
            res.json(foundList)
        }
    })
})

app.post('/collection',(req,res)=>{
    const addTask = req.body.task;
    const getList = myList[myList.length-1];

    if(addTask!==null){
        const newTask = new Task({
            task : addTask
        })
        
            List.findOne({ _id : getList },(err,foundList)=>{
                if(foundList){
                    foundList.list.push(newTask)
                    foundList.save()
                }
            })
    }
})

app.post('/delete',(req,res)=>{
    const getList = myList[myList.length-1];
    const checkedItemID = req.body.itemID;

    List.findOneAndUpdate({_id : getList},{$pull : {list : {_id : checkedItemID }}},(err,foundList)=>{
        if(!err){
            res.redirect('/delete')
        }
    })
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})
