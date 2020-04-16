import {IsNotEmpty} from 'class-validator';

export class CardDTO {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}
