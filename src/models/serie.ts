/* eslint-disable no-unused-vars */

export class SerieStructure {
  isWatched: boolean;
  score: number;
  constructor(
    public name: number,
    public creator: string,
    public year: number,
    public poster: string,
    public emmies: number
  ) {
    this.name;
    this.creator;
    this.year;
    this.poster;
    this.emmies;
    this.isWatched = false;
    this.score = 0;
  }
}
