import { Injectable } from '@nestjs/common';
import { Hospital } from 'src/common/models/hospital.model';

@Injectable()
export class HospitalService {

    private hospitals : Hospital[] = [
        {
            id: "OX85FVSzIZ",
            name: "San Pedro Hospital of Davao City, Inc.",
            location: "Guzman St, Poblacion District, Davao City, Davao del Sur"
        },
        {
            id: "f4DCxODJYy",
            name: "Davao Doctors Hospital",
            location: "118 Elpidio Quirino Ave, Poblacion District, Davao City, Davao del Sur"
        }
    ]

    public getHospital(id: string): Hospital {
        return this.hospitals.find(h => h.id == id);
    }
}
