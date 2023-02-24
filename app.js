const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.post("/", function(req,res) {

    res.json({success : true});
} )
app.post("/signup", function(req,res) {
    console.log(req.body);
    res.json({success : true});
})
app.listen(3000, function() {
    console.log("Server running on port 3000");
})