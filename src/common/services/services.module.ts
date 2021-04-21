import { Module } from '@nestjs/common';
import { HospitalService } from './hospital/hospital.service';
import { DoctorService } from './doctor/doctor.service';
import { RatingService } from './rating/rating/rating.service';

@Module({
  providers: [HospitalService, DoctorService, RatingService],
  exports: [HospitalService, RatingService]
})
export class ServicesModule {}
