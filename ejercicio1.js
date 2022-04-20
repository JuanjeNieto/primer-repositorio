function CantidadPago() {

    let precio, cantidad, total;

            precio = prompt('Precio del articulo')
            cantidad = prompt('Cantidad de ese articulo');
            total = parseInt(precio) * parseInt(cantidad);
            console.log('Debe pagar: ' + total)

}
