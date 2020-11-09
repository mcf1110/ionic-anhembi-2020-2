export interface ReleaseGroup {
    'secondary-types': string[];
    title: string;
    'first-release-date': string;
    'primary-type': string;
    id: string;
    'secondary-type-ids': string[];
    disambiguation: string;
    'primary-type-id': string;
}

export interface Area {
    id: string;
    'type-id?': any;
    disambiguation: string;
    'iso-3166-1-codes'?: string[];
    type?: any;
    'sort-name': string;
    name: string;
}

export interface LifeSpan {
    begin: string;
    ended: boolean;
    end: string;
}

export interface GetAlbumsResult {
    gender?: any;
    name: string;
    country: string;
    'release-groups': ReleaseGroup[];
    'begin-area': Area;
    begin_area: Area;
    ipis: any[];
    area: Area;
    type: string;
    'end-area?': any;
    disambiguation: string;
    'type-id': string;
    id: string;
    'life-span': LifeSpan;
    end_area?: any;
    'sort-name': string;
    isnis: string[];
    'gender-id?': any;
}


