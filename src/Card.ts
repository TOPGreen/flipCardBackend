import {InMemoryDBEntity} from '@nestjs-addons/in-memory-db';

export interface Card extends InMemoryDBEntity {
    title: string;
    description: string;
}
