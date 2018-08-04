const fs = require('fs');
const color = require('colors');

let listar = (base, limite) => {

    console.log('******************'.red);
    console.log(`Tabla del ${base} al ${limite}`.red);
    console.log('******************'.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i} \n`)
    }

}


let multiplicar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }

        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i} \n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
    multiplicar,
    listar
}