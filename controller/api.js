const knex = require('../model/query')

module.exports = (app) => {
    app.post('/post', (req, res) => {
        var data = {
            task: req.body.task
        } 
        knex.post_query(data)
            .then((new1) => { 
                res.send(new1)
            }) 
            .catch((err) => { 
                res.send(err) 
            })
    })

    app.get('/get/:id', (req, res) => {
        var id = req.params.id;
        knex.get_query(id)
            .then((getData) => {
                res.send(getData)
            })
            .catch((err) => {
                res.send(err)

            })
    })

    app.put('/put/:id', (req, res) => {
        var id = req.params.id;
        const data = {
            task: req.body.task
        }
        knex.put_query(data, id)
            .then((getData) => {
                res.json(getData)
            })
            .catch((err) => {
                res.send(err)
            })
    })

    app.del('/delete/:id', (req, res) => {
        var id = req.params.id;
        knex.delete_query(id)
            .then((deleteData) => {
                res.json(deleteData)
            }).catch((err) => {
                console.log("error")
                res.send(err)
            })
    })
}