import { filepath } from 'node:path'

import { DEFAULT_HEADER } from '../util/util.js'

const allRoutes = {
    //404 Routes
    default: (request, response) => {
        response.writeHead(404, DEFAULT_HEADER)
        response.write('ERRO 404')
        response.end()
    }
}

function handler (req, res){
    const {
        url,
        method
    } = req
    const { pathname } = parse(url, true)

    const key = `${pathname}:${method.toLowerCase()}`
    const chosen = allRoutes[key] || allRoutes.default
    console.log({key})

    return Promise.resolve (chosen(req, res))
    .catch(handlerError(res))
    //res.end('Hello World')
}

function handlerError(response){
    return error => {
        console.log('Deu RUIM :(', error.stack)
        response.writeHead(500, DEFAULT_HEADER)
        response.write(JSON.stringify({
            error: 'internal server ERROR'
        }))
        return response.end()
    }
    
}

export default handler