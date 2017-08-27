import { Router } from 'express'
import model from '../model'

export default (router: Router) => {
    router.get('/login/:username/:password', async (req, res) => {
        await model.login_tries.destroy({
            where: {
                RESET_DATE: {
                    $lte: new Date()
                }
            }
        })

        const login_tries_query = await model.login_tries.findById(req.ip, {
            attributes: ['COUNT']
        })

        const login_tries = login_tries_query ? login_tries_query['COUNT'] : 0

        if(login_tries >= 5) {
            res.sendStatus(403)
            
            return
        }

        await model.login_tries.upsert({
            IP: req.ip,
            RESET_DATE: Date.now() + 5 * 60000,
            COUNT: login_tries + 1
        })

        const usuario = await model.usuarios.findAll({
            where: {
                USERNAME: req.params.username,
                PASSWORD: req.params.password
            }
        })

        res.json(usuario)
    })
}