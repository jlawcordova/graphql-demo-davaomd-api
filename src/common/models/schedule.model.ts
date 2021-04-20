import { Field, ObjectType } from "@nestjs/graphql";
import { Hospital } from "./hospital.model";
import { ScheduleTime } from "./scheduleTime.model";

@ObjectType()
export class Schedule {
    hospitalId?: string;

    @Field(() => Hospital, { nullable: true })
    hospital?: Hospital;

    @Field({ nullable: true })
    building?: string;

    @Field(() => [String], { nullable: true })
    contactNumbers?: string[];

    @Field(() => [ScheduleTime], { nullable: true })
    scheduleTime?: ScheduleTime[];
}