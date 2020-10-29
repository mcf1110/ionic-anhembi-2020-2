interface LifeSpan {
    end: string;
    begin: string;
    ended: boolean;
}

interface ReleaseGroup {
    'primary-type-id': string;
    title: string;
    'primary-type': string;
    disambiguation: string;
    'first-release-date': string;
    id: string;
    'secondary-types': string[];
    'secondary-type-ids': string[];
}

interface Area {
    'iso-3166-1-codes'?: string[];
    disambiguation: string;
    'sort-name': string;
    name: string;
    id: string;
    'type-id'?: any;
    type?: any;
}

export interface ReleaseResult {
    'life-span': LifeSpan;
    disambiguation: string;
    begin_area: Area;
    gender?: string;
    type: string;
    id: string;
    name: string;
    end_area?: any;
    'sort-name': string;
    'release-groups': ReleaseGroup[];
    ipis: any[];
    isnis: string[];
    'begin-area': Area;
    country: string;
    'type-id': string;
    'end-area'?: any;
    area: Area;
    'gender-id'?: any;
}

