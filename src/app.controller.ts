import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Card } from './Card';
import { CardDTO } from './CardDTO';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Controller()
export class AppController {
  constructor(private cardsService: InMemoryDBService<Card>) {}


  @Get()
  getAll(): Card[] {
    return this.cardsService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: number): Card {
    return this.cardsService.get(id);
  }

  @Post('seed')
  seed(): Card[] {
    const recordFactory = (idx: number): Partial<Card> => (
      {
        id: idx,
        title: `Title-${idx}`,
        description: 'some description',
      }
    );

    this.cardsService.seed(recordFactory, 5);

    return this.cardsService.getAll();
  }
  @Post()
  create(@Body() model: CardDTO): Card {
    return this.cardsService.create(model);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.cardsService.delete(id);
  }
}
