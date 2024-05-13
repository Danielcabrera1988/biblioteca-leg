import { dipData } from "../diputados/data/dipData";

export const getDipById = (dipId: number) => {
  return dipData.find((dip) => dip.id === dipId);
};
