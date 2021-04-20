
import { Field, ObjectType } from '@nestjs/graphql';
import { Schedule } from './schedule.model';

@ObjectType()
export class Doctor {
    id?: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    specialty?: string;

    @Field({ nullable: true })
    photo?: string;

    @Field(() => [Schedule], { nullable: 'items' })
    schedule?: Schedule[];
}
