export class Project {
    id!: string;
    name!: string;
    hourly_rate!: number;
    travel_hourly_rate?: number;
    travel_fixed_rate?: number;
    currency!: string;
    client_id!: string;
}
