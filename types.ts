export type DistanceType = 'lunar' | 'kilometers';

export type AsteroidType = {
    id:string;
    date:string;
    name: string;
    size: {
        estimated_diameter_min: number;
        estimated_diameter_max: number;
    };
    distance: {
        kilometers: string;
        lunar: string;
    }
    isDanger: boolean;
    distanceSort: DistanceType;
    inCart: boolean;
}
