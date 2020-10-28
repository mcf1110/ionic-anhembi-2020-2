interface LifeSpan {
    begin: string;
    end: string;
    ended: boolean;
}

interface BeginArea {
    disambiguation: string;
    type?: any;
    name: string;
    id: string;
    'type-id'?: any;
    'sort-name': string;
}

interface ReleaseGroup {
    disambiguation: string;
    'first-release-date': string;
    id: string;
    'primary-type': string;
    'secondary-types': string[];
    title: string;
    'secondary-type-ids': string[];
    'primary-type-id': string;
}

interface Area {
    'iso-3166-1-codes': string[];
    type?: any;
    disambiguation: string;
    name: string;
    'type-id'?: any;
    'sort-name': string;
    id: string;
}

export interface ReleaseResult {
    id: string;
    'life-span': LifeSpan;
    begin_area: BeginArea;
    type: string;
    'end-area'?: any;
    gender?: any;
    'sort-name': string;
    'type-id': string;
    name: string;
    'begin-area': BeginArea;
    'release-groups': ReleaseGroup[];
    ipis: any[];
    disambiguation: string;
    end_area?: any;
    area: Area;
    country: string;
    isnis: string[];
    'gender-id'?: any;
}

