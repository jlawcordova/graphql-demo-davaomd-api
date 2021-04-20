import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Hospital {
    id: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    location?: string;
}