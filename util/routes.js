

const routes = () => ({
    ':get': async (request, response) =>{
        response.write('ENTROU GET')
        return response.end()
    },
    ':post': async (request, response) =>{
        console.log('Entrou POST')
        return response.end()
    },
})

export{
    routes
}