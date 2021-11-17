const Task = require('../Database/Model/model_task');


const getAllTasks = async (req,res) => {
    
    try{
            
            Task.find({},(err,data)=>{
                if(err){
                    return res.status(400).json({errors :[{msg : err}]});
                }
                else{
                    return res.status(201).json(data);
                }
            })
    }catch(err){

        console.error(error.message);
        res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
}


const createTask = async (req,res) => {
    const {name,completed} = req.body;
    try{
        const task = new Task({name,completed});
        task.save((err,data)=> {
        if(err){
                return res.status(400).json({errors : [{msg : err}]});
            }
            return res.status(200).json(data);
        });
    }catch(error){
        console.error(error.message);
        res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
};

const getSingleTask = (req,res) => {
const _id = req.params.id;
    try{
        
        Task.findOne({_id}, (err,data)=>{
            if(err){
                return res.status(400).json({erros : [{msg : err}]});
            }
            return res.status(200).json(data);
        })
    }
  catch(error){
        console.error(error.message);
        res.status(500).json(error);
    }
};

const editTask = (req,res) => {
    res.send({id :req.params.id});
}

const deleteTask = (req,res) => {
    const _id = req.params.id;
  try {
    Task.findOne({ _id }, (err, data) => {
      if (err) {
        return res.status(400).json({ errors: [{ msg: err }] });
      }
      data.remove((err, user) => {
        if (err) {
          return res.status(400).json({ errors: [{ msg: err }] });
        }
        return res.status(200).send({ cart: user });
      });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

module.exports ={
    getAllTasks,
    getSingleTask,
    createTask,
    editTask,
    deleteTask,
}