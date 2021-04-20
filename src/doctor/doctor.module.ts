import { Module } from '@nestjs/common';
import { DoctorService } from 'src/common/services/doctor/doctor.service';
import { ServicesModule } from 'src/common/services/services.module';
import { DoctorResolver } from './doctor.resolver';
import { ScheduleResolver } from './schedule/schedule.resolver';

@Module({
  providers: [
    DoctorResolver,
    DoctorService,
    ScheduleResolver
  ],
  imports: [ServicesModule]
})
export class DoctorModule {}
