import { DipCard } from "./DipCard";
import { dipData } from "../data/dipData";

type props = {
  cantidad: number;
};

export const DipList = (props: props) => {
  return (
    <>
      {dipData.slice(0, props.cantidad).map((dip) => (
        <DipCard key={dip.id} {...dip} />
      ))}
    </>
  );
};
