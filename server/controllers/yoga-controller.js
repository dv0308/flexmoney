const Yoga = require("../models/yogamodel")

createUser = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide User Details',
        })
    }
    const yogauser = new Yoga(body)

    if (!yogauser) {
        return res.status(400).json({ success: false, error: err })
    }

    yogauser.save().then(() => {
            return res.status(201).json({
                success: true,
                id: yogauser._id,
                message: 'Yoga User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Yoga User not created!',
            })
        })
}

updateUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Yoga.findOne({ _id: req.params.id }, (err, yogauser) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Yoga User not found!',
            })
        }
        yogauser.name = body.name
        yogauser.age = body.age
        yogauser.batch = body.batch
        yogauser.save().then(() => {
                return res.status(200).json({
                    success: true,
                    id: yogauser._id,
                    message: 'Yoga User updated!',
                })
            }).catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Movie not updated!',
                })
            })
    })
}

getUserById = async (req, res) => {
    await Yoga.findOne({ _id: req.params.id }, (err, yogauser) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!yogauser) {
            return res
                .status(404)
                .json({ success: false, error: `Yoga User not found` })
        }
        return res.status(200).json({ success: true, data: yogauser })
    }).catch(err => console.log(err))
}

deleteUser= async (req, res) => {
    await Yoga.findOneAndDelete({ _id: req.params.id }, (err, yogauser) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!yogauser) {
            return res
                .status(404)
                .json({ success: false, error: `Yoga User not found` })
        }
        return res.status(200).json({ success: true, data: yogauser })
    }).catch(err => console.log(err))
}

module.exports = {
   createUser,
   deleteUser,
   updateUser,
   getUserById
}