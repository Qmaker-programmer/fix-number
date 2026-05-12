const http = require('http');
const fix = require('./index.js'); // Tu librería estrella

const server = http.createServer((req, res) => {
    // Usamos fix-number para procesar algo en cada petición
    const result = fix("123"); 
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Resultado de fix-number: ${result}\n`);
});

server.listen(3000, () => {
    console.log('Servidor listo en http://localhost:3000');
});
//si quierer probar la resistencia, en linux ejecuten sudo apt install hey && hey -n 1000000 -c 10000 http://localhost:3000 vean la eficiencia!
