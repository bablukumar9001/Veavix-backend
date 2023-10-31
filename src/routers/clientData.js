const express = require("express")
const router = new express.Router()
const cData = require("../models/clientData")
// const regData = require("../model/regConn")


router.get("", (req, res) => {
    res.send("hello this is the express home page ")
})
router.get("/contact", (req, res) => {
    res.send(" this is the contact page ")
})

router.post("/clientdata", async (req, res) => {

    const { name, mobile, email, message } = req.body

    if (!name || !mobile || !email || !message) {
        return res.status(422).json({ error: "plz fill the fields properly" })
    }
    try {


        const user = new cData({ name, mobile, email, message })
        const createUser = await user.save()
        res.send(createUser)
        console.log(createUser)

    }
    catch (e) {
        console.log(e)
        return res.sendStatus(400).send(e)
    }

})





module.exports = router