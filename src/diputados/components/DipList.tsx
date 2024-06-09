import { DipCard } from "./DipCard";
import { dipData } from "../data/dipData";
import { CantDip } from "../../interfaces";

export const DipList = (props: CantDip) => {
  return (
    <>
      {dipData.slice(0, props.cantidad).map((dip) => (
        <DipCard key={dip.id} {...dip} />
      ))}
    </>
  );
};
