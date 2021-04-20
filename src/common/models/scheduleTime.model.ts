import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ScheduleTime {
    @Field({ nullable : true })
    weekDays: string;

    @Field({ nullable : true })
    startTime: string;

    @Field({ nullable : true })
    endTime: string;
}