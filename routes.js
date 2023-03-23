const express = require('express');
const router = express.Router();
const Textile = require('./models/textiles');

// get all members
router.get('/textiles', async(req, res) => {
    const allTextiles = await Textile.find();
    console.log(allTextiles);
    res.send(allTextiles);
});

router.post('/textiles', async(req, res) => {
    const newTextile = new Textile({
      category: req.body.category,
      feature: req.body.feature,
      wash_temp: req.body.wash_temp,
      iron_level: req.body.iron_level,
      others: req.body.others,
    });
    await newTextile.save();
    res.send(newTextile);
  });
  


// get one textile - Read 
router.get('/textiles/:id', async(req, res) => {
    try {
        const textile = await Textile.find({ _id: req.params.id });
        console.log(req.params);
        res.send(textile[0]);
    } catch {
        res.status(404);
        res.send({
            error: 'Textile does not exist'
        })
    }
})



// update one textile
router.patch('/textiles/:id', async(req, res) => {
    try {
        const textile = await Textile.findOne({ _id: req.params.id })

        if (req.body.category) {
            textile.category = req.body.category
        }

        if (req.body.feature) {
            textile.feature = req.body.feature
        }

        if (req.body.wash_temp) {
            textile.wash_temp = req.body.wash_temp
        }

       if (req.body.iron_level) {
            textile.iron_level = req.body.iron_level
        }

        if (req.body.others) {
            textile.others = req.body.others
        }

        await Textile.updateOne({ _id: req.params.id }, textile);
        res.send(textile)
    } catch {
        res.status(404)
        res.send({ error: "Textile does not exist!" })
    }
});

// delete one textile via id
router.delete('/textiles/:id', async(req, res) => {
    try {
        await Textile.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Textile does not exist!" })
    }
});

module.exports = router;

