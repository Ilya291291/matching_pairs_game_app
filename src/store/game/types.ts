import { ICard } from "types/ICard";
import { IChoice } from "types/IChoice";

export interface IGame {
  gameGlobalStart: boolean,
  isGameOn: boolean,
  cards: ICard[] | undefined,
  choice1: IChoice | null,
  choice2: IChoice | null,
  clicksToFindMatch: number,
  foundPairs: ICard[],
  difficulty: string,
  isDifficultyChosen: boolean 
}