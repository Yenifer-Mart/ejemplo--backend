import { Injectable, NotFoundException } from '@nestjs/common';
import { NOTFOUND } from 'dns';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ClientService {
    private clients =[
        {
            id:1,
            nombre:'cliente 1',
            direccion: 'direccion 1'
        },
        {
            id:2,
            nombre:'cliente 2',
            direccion: 'direccion 2'
        }
    ]
    findAll(){
        return this.clients;
    }
    findById({ id }: { id: number; }){
        const client = this.clients.find(c => c.id=== id);
        if(!client)
{
    throw new NotFoundException(`client with id ${id} does not exits`);
}        return client;
}

updateClient(clientBody, id){
    //validaciones

    const client = this.clients.find(c => c.id=== id);
    if(!client)
{
throw new NotFoundException(`client with id ${id} does not exits`);
}

 //logica para actualizar el cliente
    return {status:'cliente actualizado'}
}

deleteClient(id){

    const client = this.clients.find(c => c.id=== id);
    if(!client)
{
throw new NotFoundException(`client with id ${id} does not exits`);
}

 //logica para eliminar
    return {status:'Cliente eliminado'}
}

createClient(clientBody){

    const client = this.clients.find(c => c.id=== clientBody.id);
    if(!client){
throw new NotFoundException(`client with id ${clientBody.id}  exits`);
}

 //logica para eliminar
    return {status:'Cliente creado'}
}


}
