import { Module } from '@nestjs/common';
import { HospitalService } from './hospital/hospital.service';
import { DoctorService } from './doctor/doctor.service';

@Module({
  providers: [HospitalService, DoctorService],
  exports: [HospitalService]
})
export class ServicesModule {}
