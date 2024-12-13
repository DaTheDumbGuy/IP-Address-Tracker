export default interface GeolocationData {
    ip: string;
    location: {
        country: string;
        region: string;
        timezone: string;
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