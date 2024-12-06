export interface dataInterface {
    "key" : string;
    "value" : string;
}

export interface columnInterface {
    "key" : string;
    "name" : string;
    "type" : columnType;
}

export enum columnType {
    Date = 'date',
    Number = 'number',
    String = 'string',
}


export interface  sortInterface{
    "key" : string;
    "direction" : SortDirection;
    "viewValue" : string;
}


export type SortDirection = 'asc' | 'desc';

export type gridType = 'FoorCol' | 'threeCol' | 'twoCol' | 'lines' ;