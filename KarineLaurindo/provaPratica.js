//01
// const http = require('http')
// const fs = require('fs')
// const url = require('url')

// const port = 3000

// const server = http.createServer((req, res)=>{
//     const objeto = [
//         {id: 1, nome: 'Karine'},
//         {id: 2, nome: 'Lucas'},
//         {id: 3, nome: 'Amanda'},
//     ]
//     const json = JSON.stringify(objeto)
//     console.log(json)

//     if(req.url === '/info'){
//         res.writeHead(200, {'Content-Type':'text/html'})
//         res.write(`id: ${objeto.id} nome: ${objeto.nome}`)
//         res.end()
//     }
// })

// server.listen(port, ()=>{
//     console.log(`Servidor rodando na porta ${port}`)
// })


//02
// const path = ('path')
// const url = ('url')
// const address = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'
// const parseUrl = new url.URL(address)

// const obj = {
//     root: '',
//     dir: path.dirname(address),
//     base: path.basename(address),
//     ext: path.extname(address),
// }

// console.log(obj)


//03
// const url = require('url')
// const address = 'https://nodejs.org/api/url.html#url_new_url_input_base'
// const parseUrl = new url.URL(address)

// console.log(parseUrl.protocol)
// console.log(parseUrl.port)
// console.log(parseUrl.host) 
// console.log(parseUrl.search)
// console.log(parseUrl.pathname) 
// console.log(parseUrl.searchParms) 
// console.log(parseUrl.hash) 
// console.log(address)


//04
// const fs = require('fs')

// fs.rename('arquivo.txt', 'arquivoRenomeado.txt', (err)=>{
//     if(err){

//     }
//     console.log('ok')
// })


//05
// const os = require('os')

// console.log(os.cpus)