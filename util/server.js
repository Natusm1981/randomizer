import {createServer} from 'https'
import {} from './handler.js'


const servidor = createServer(handler).listen(SERVER_PORT,  () => console.log(`Server is running at ${SERVER_PORT}`))


// const servidor = function ligar(SERVER_PORT){ 
//     createServer( (req, res) => {
//         res.writeHead('200')
//     })
// .listen(SERVER_PORT, () => console.log(`Server RUNNING on port ${SERVER_PORT}`))
// }


export{
    servidor
}