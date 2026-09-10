const express = require('express');

const app = express();

app.use(express.json())
    
const notes = []



// post method is used to add the data in the array.
app.post("/notes", (req, res) => {
    notes.push(req.body);

    res.status(201).json({
        message: "Note added successfully",
    });
});


// get method is used to get the existing data in the array.
app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
})


// delete method is used to delete the existing data in the array.
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index

    delete notes[index]

    res.status(200).json({
        message: "notes deleted succesfully"
    })
})


// patch method is used to update the existing data in the array.
app.patch('/notes/:index', (req, res) => {
    
    const index = req.params.index
    const { title, description } = req.body

    notes[index].title = title
    notes[index].description = description

    res.status(200).json({
        message: "Note updated successfully"
    })
})


module.exports = app;