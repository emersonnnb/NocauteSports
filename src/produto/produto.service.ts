/*
* O service é utilizado para isolar a regra de negocio dos controller e facilitar a reutilização do código em mais de uma parte da aplicação.
*/
import { Produto } from './entities/produto.entity';
import { Injectable } from '@nestjs/common';

@Injectable() // utilizado para injetar as informações nas classes de sua preferencia.
export class ProdutoService {

    private produto: Produto[] = [
        {
            id: 1,
            name: "Fundamentos do NESTJS",
            description: "Curso de NESTJS"
        }
    ];

    listProduct() {
        return this.produto;
    }

    readProduct(id: string) {
        return this.produto.find((produto: Produto) => produto.id === Number(id))
    }

    /*responsavel por Receber os dados do controller e executar o comando no BD */
    createProduct(createtDTO: any) {
        return this.produto.push(createtDTO)
    }

    /* Metodo responsável por receber qual produto(id) vai ser atualizado, e quais informações(updateDTO) serão atualizadas */
    updateProduct(id: string, updateDTO: any) {
        const indexProduct = this.produto.findIndex(produto => produto.id == Number(id));// procura o produto a ser atualizado e armazana na constante
        this.produto[indexProduct] = updateDTO;//Pega o index e atualiza com a informações do UpdateDTO.
    }

    //metodo utilizado para apagar um produto atraves de um ID.
    deleteProduct(id: string) {
        const indexProduct = this.produto.findIndex(produto => produto.id == Number(id));// procura o produto a ser atualizado e armazana na constante

        if (indexProduct >= 0) {
            this.produto.splice(indexProduct, 1);
        }
    }
}
