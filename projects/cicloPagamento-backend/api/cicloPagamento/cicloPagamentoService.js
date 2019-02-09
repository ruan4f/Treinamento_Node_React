const cicloPagamento = require('./cicloPagamento')

cicloPagamento.methods(['get','post','put', 'delete'])

cicloPagamento.updateOptions({new: true, runValidators: true  })

cicloPagamento.route('count',(req,res,next) => {
    cicloPagamento.count((error, value) => {
            if(error){
                res.status(500).json({errors: [error]})
            }else{
                res.json({value})
            }

    })
})

cicloPagamento.route('summary', (req, res, next) => {
   cicloPagamento.aggregate({
        $project: {credito: {$sum: "$creditos.valor"}, debito: {$sum: "$debitos.valor"}}
    }, {
        $group: {_id: null, credito: {$sum: "$credito"}, debito: {$sum: "$debito"}}
    }, {
        $project: {_id: 0, credito: 1, debito: 1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credito: 0, debito: 0 })
        }
    })
}) 


module.exports = cicloPagamento