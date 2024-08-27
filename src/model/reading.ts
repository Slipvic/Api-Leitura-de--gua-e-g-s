export interface Reading {
    id: number;
    type: 'water' | 'gas';
    value: number;
    date: Date;
  }
  