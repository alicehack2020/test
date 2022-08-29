const mongoose=require("mongoose")

const notes=new mongoose.Schema({
    title:{type:String},
    note:{type:String}
})
const NoteModel=mongoose.model("notes",notes)
module.exports=NoteModel;