import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

/** 
 * Controller  é quem recebe as requisições via end point
*/

@Controller('produto')
export class ProdutoController {

    @Get()
    ListProduto() {
        return "Lista de produtos";
    }

    @Post()
    createProduto(@Body() body) {
        return body;
    }

    @Get(':id')
    readProduto(@Param('id') id: string) {
        return `Leitura do produto numero ${id}.`;
    }

    @Patch(':id')
    updateProduto(@Param('id') id: string, @Body() body) {
        return `Atualização do produto numero ${id}.`;
    }

    @Delete(':id')
    deleteProduto(@Param('id') id: string) {
        return `Remoção do produto numero ${id}.`;
    }
}

