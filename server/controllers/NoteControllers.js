const mongoose=require("mongoose")
const NoteModel=require("../model/notes")

class NoteControllers{

    static getNotes=async(req,res)=>
    {
        const note=await NoteModel.find()
        res.send(note)
    }

    static addNotes=async (req,res)=>
    {
        const note=await NoteModel.create({
                "title":req.body.title ,
                "note":req.body.note ,
                 
        })
        res.send(note)
    }

    static noteDelete=async(req,res)=>{
        const {_id}=req.body
        const id=_id
         
        const note=await NoteModel.deleteOne({"_id":id})
        res.send(note)
    }

 
}

module.exports=NoteControllers;