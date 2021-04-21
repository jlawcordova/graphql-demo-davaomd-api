import { Injectable } from '@nestjs/common';
import { Rating } from 'src/common/models/rating.model';

@Injectable()
export class RatingService {
    public getRating(id: string): Rating {
        return {
            rating: 4.5,
            count: 122
        }
    }
}
