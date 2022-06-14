import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoController } from './produto/produto.controller';
import { ProdutoService } from './produto/produto.service';


@Module({
  imports: [],
  controllers: [AppController, ProdutoController],
  providers: [AppService, AppService, ProdutoService],
})
export class AppModule { }
