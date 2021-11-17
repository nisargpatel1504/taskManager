const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true ,'must provide name'],
        trim : true,
        maxLength :[20,'name can be more than 20 charcters'],
    },
    completed:{
        type: Boolean,
        default : false,
    },
});

module.exports = mongoose.model('Task',TaskSchema);

