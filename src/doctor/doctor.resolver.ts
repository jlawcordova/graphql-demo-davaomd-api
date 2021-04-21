import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Doctor } from 'src/common/models/doctor.model';
import { Rating } from 'src/common/models/rating.model';
import { DoctorService } from 'src/common/services/doctor/doctor.service';
import { RatingService } from 'src/common/services/rating/rating/rating.service';

@Resolver(() => Doctor)
export class DoctorResolver {
    constructor(
        private doctorService: DoctorService,
        private ratingService: RatingService
    ) { }

    @Query(() => Doctor)
    async doctor(): Promise<Doctor> {
        return this.doctorService.getDoctor();
    }

    @ResolveField(() => Rating)
    async rating(
        @Parent()
        doctor: Doctor
    ): Promise<Rating> {
        return this.ratingService.getRating(doctor.id);
    }
}
