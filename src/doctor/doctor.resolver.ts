import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Doctor } from 'src/common/models/doctor.model';
import { Hospital } from 'src/common/models/hospital.model';
import { Schedule } from 'src/common/models/schedule.model';
import { DoctorService } from 'src/common/services/doctor/doctor.service';
import { HospitalService } from 'src/common/services/hospital/hospital.service';

@Resolver(() => Doctor)
export class DoctorResolver {
    constructor(
        private doctorService: DoctorService,
    ) { }

    @Query(() => Doctor)
    async doctor(): Promise<Doctor> {
        return this.doctorService.getDoctor();
    }
}
