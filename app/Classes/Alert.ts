import {Movie} from "./Movie";

export class Alert {
  type: string;
  message: string;
  getType: GetType;
  movieInfo: Movie;
}

export enum GetType
{
  List,
  Details
}

