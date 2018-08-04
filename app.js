const { multiplicar, listar } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs')
const color = require('colors');


let base = argv.base;
let comando = argv._[0];
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listar(base, limite)
        break;
    case 'crear':
        multiplicar(base, limite)
            .then(archivo => console.log(`Archivo: ${color.red(archivo)} creado exitosamente!!`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
        break;
}



// let argv2 = process.argv;
// console.log(argv2)


// console.log(argv.base)
// let parametro = argv[2];
// parametro = parametro.split('=')[1];
// base = parametro;