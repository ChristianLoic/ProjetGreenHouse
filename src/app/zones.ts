export interface Zone {
  idZone: number;
  description: string;
  plantationDate: VarDate;
  typeFood: string;
  idSerre: number;
}

export const zones = [
  {
    idZone: 1,
    description: 'banane bleu ',
    plantationDate: Date.now(),
    typeFood: 'fruit',
    idSerre: 1
  },
  {
    idZone: 2,
    description: Date.now(),
    plantationDate: 'banane rouge',
    typeFood: 'fruit',
    idSerre: 1
  },
  {
    idZone: 3,
    description: Date.now(),
    plantationDate: 'brocoli vert',
    typeFood: 'legume',
    idSerre: 2
  },
  {
    idZone: 4,
    description: Date.now(),
    plantationDate: 'brocoli rose',
    typeFood: 'legume',
    idSerre: 2
  }
];
