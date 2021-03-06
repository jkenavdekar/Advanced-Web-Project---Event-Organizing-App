import mongoose from 'mongoose';
import EventMessage from "../models/eventMessage.js";


export const getEvents = async (req, res) => {
    try {
        const eventMessages = await EventMessage.find();
        //eventMessages.sort({date: 1})
        res.status(200).json(eventMessages);
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createEvent = async (req, res) => {
    const { title, description, category, venue, date, time, hostedBy, city, hostUid, attendees, isCancelled, hostPhotoURL } = req.body;

    const newEvent = new EventMessage({ title, description, category, venue, date, time, hostedBy, city, hostUid, attendees, isCancelled, hostPhotoURL })

    try {
        await newEvent.save();

        res.status(201).json(newEvent);
    } 
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateEvent = async (req, res) => {

    const { id } = req.params;

    const { title, category, description, city, venue, date } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedEvent = { title, category, description, city, venue, date, _id: id };

    await EventMessage.findByIdAndUpdate(id, updatedEvent, { new: true });

    res.json(updatedEvent);
}

export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await EventMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export const addAttendee = async (req, res) => {

    const { id } = req.params;

    //console.log(req.body);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = await EventMessage.findByIdAndUpdate(id, { $addToSet:{attendees: req.body}, }, { new: true });
    
    res.json(updatedPost);
}

export const cancelAttendee = async (req, res) => {

    const { id } = req.params;

    //console.log(req.body[0]);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = await EventMessage.findByIdAndUpdate(id, { $pull:{attendees: req.body[0]}, }, { new: true });
    
    res.json(updatedPost);
}


export const addComment = async (req, res) => {

    const { id } = req.params;

    //console.log(req.body);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const post = await EventMessage.findById(id);

    const updatedPost = await EventMessage.findByIdAndUpdate(id, { $push:{comments: req.body}, count: post.count + 1 }, { new: true });
    
    res.json(updatedPost);
}


export const toggleEvent = async (req, res) => {

    const { id } = req.params;

    //console.log(Object.keys(req.body)[0]);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = await EventMessage.findByIdAndUpdate(id, { isCancelled: Object.keys(req.body)[0] }, { new: true });
    
    res.json(updatedPost);
}


export const updatePhoto = async (req, res) => {

    const { id } = req.params;
    
    try {
        const {photoURL} = req.body; 

        //console.log(id);

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

        const updatedUser = await EventMessage.updateMany({hostUid: id}, { hostPhotoURL: photoURL }, { new: true });

        res.json(updatedUser);

    }
    catch(error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}


export const updateCount = async (req, res) => {

    const { id } = req.params;
    
    try {

        //console.log(id);

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        const updatedUser = await EventMessage.updateMany({hostUid: id}, { count: 0 }, { new: true });

        res.json(updatedUser);

    }
    catch(error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}