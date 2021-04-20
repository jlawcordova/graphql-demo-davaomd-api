import { Injectable } from '@nestjs/common';
import { Doctor } from 'src/common/models/doctor.model';

@Injectable()
export class DoctorService {
    public getDoctor(): Doctor {
        return {
            id: "M3wFgI8k4A",
            name: "Felicia Lao, MD",
            specialty: "Internal Medicine",
            photo: "https://randomuser.me/api/portraits/women/51.jpg",
            schedule: [
                {
                    hospitalId: "OX85FVSzIZ",
                    building: "Medical Arts Building (MAB) – Rm 507",
                    contactNumbers: [
                        "0910-564-0665",
                        "0910-564-0665"
                    ],
                    scheduleTime: [
                        {
                            weekDays: "Monday – Friday",
                            startTime: "10:00am",
                            endTime: "12:00pm"
                        },
                        {
                            weekDays: "Saturday",
                            startTime: "10:00am",
                            endTime: "12:00pm"
                        }
                    ]
                },
                {
                    hospitalId: "f4DCxODJYy",
                    building: null,
                    contactNumbers: [
                        "0910-564-0665",
                        "0910-564-0665"
                    ],
                    scheduleTime: [
                        {
                            weekDays: "Saturday",
                            startTime: "01:00pm",
                            endTime: "03:00pm"
                        }
                    ]
                }
            ]
        };
    }
}
