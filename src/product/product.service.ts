import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products =[
        {
            id:1,
            nombre:'producto1',
            precio: 'precio1'
        },
        {
            id:2,
            nombre:'producto2',
            precio: 'precio2'
        }
    ]
    findAll(){
        return this.products;
    }
    findById({ id }: { id: number; }){
        const product = this.products.find(p => p.id=== id);
        if(!product)
{
    throw new NotFoundException(`product with id ${id} does not exits`);
}        return product;
}
updateProduct(productBody, id){
    //validaciones

    const product = this.products.find(p => p.id=== id);
    if(!product)
{
throw new NotFoundException(`product with id ${id} does not exits`);
}

 //logica para actualizar el producto
    return {status:'producto actualizado'}
}

deleteProduct(id){

    const product = this.products.find(p => p.id=== id);
    if(!product)
{
throw new NotFoundException(`product with id ${id} does not exits`);
}

 //logica para eliminar
    return {status:'Producto eliminado'}
}

createProduct(productBody){

    const product = this.products.find(p => p.id=== productBody.id);
    if(!product){
throw new NotFoundException(`client with id ${productBody.id}  exits`);
}

 //logica para eliminar
    return {status:'Producto creado'}
}

}
