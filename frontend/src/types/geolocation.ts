export default interface GeolocationData {
    ip: string;
    location: {
        country: string;
        region: string;
        city:string;
        lat:number;
        lng:number;
        postalCode:string;
        timezone: string;
        geonameId:number;
    };
    as: {
        asn: number;
        name: string;
        route: string;
        domain: string;
        type: string;
    };
    isp: string;
    
}
export interface showDataProps{
    ip:string;
    country:string;
    region:string;
    city:string;
    timezone:string;
    isp:string;
} 