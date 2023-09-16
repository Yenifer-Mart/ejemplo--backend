import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor (private readonly productService:ProductService){}
    @Get()
    getProduct(){
        return this.productService.findAll();
    }
    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id:number){
        console.log(`el id a buscar es ${id}`);

        return this.productService.findById({ id });
    }
    @Put(':id')
    updateClient(@Param('id', ParseIntPipe) id:number, @Body() body){
        console.log(`el id a actualizar es ${id}`);
        console.log(body);
        return this.productService.updateProduct(body, id);
    }
    
    @Delete(':id')
    deleteById(@Param('id', ParseIntPipe) id:number){
        console.log(`el id a eliminar es ${id}`);

        return this.productService.deleteProduct({ id });
    }

    @Post()
    createClient( @Body() body){
        console.log(body);
        return this.productService.createProduct(body);
    }
    
}

