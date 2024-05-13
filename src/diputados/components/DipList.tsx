import { DipCard } from "./DipCard";
import { dipData } from "../data/dipData";

export const DipList = () => {
  return (
    <>
      {dipData.map((dip) => (
        <DipCard key={dip.id} {...dip} />
      ))}
    </>
  );
};
