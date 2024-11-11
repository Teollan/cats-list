import { ReactNode } from "react";
import { useDrop } from "react-dnd";
import { Cat } from "../util/types/Cat";

type CatCardSpotProps = {
  onDrop: (cat: Cat) => void;
  children: ReactNode;
  place: number;
};

export default function CatCardSpot(props: CatCardSpotProps) {
  const [_, drop] = useDrop(
    () => ({
      accept: "Cat",
      drop: ({ cat }: { cat: Cat }) => {
        props.onDrop(cat);
      },
    }),
    [props.onDrop]
  );

  return <div ref={drop}>{props.children}</div>;
}
