import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Hospital } from 'src/common/models/hospital.model';
import { Schedule } from 'src/common/models/schedule.model';
import { HospitalService } from 'src/common/services/hospital/hospital.service';

@Resolver(() => Schedule)
export class ScheduleResolver {
    constructor(
        private hospitalService: HospitalService,
    ) { }

    @ResolveField(() => Hospital)
    async hospital(
        @Parent()
        schedule: Schedule
    ): Promise<Hospital> {
        return this.hospitalService.getHospital(schedule.hospitalId);
    }
}
