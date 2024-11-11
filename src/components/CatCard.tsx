import { useDrag } from "react-dnd";
import { Cat } from "../util/types/Cat";
import ButtonFavourite from "./ButtonFavourite";
import classNames from "classnames";

type CatCardProps = {
  cat: Cat;
  favourite?: boolean;
  onFavourite?: () => void;
};

export default function CatCard(props: CatCardProps) {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "Cat",
      item: { cat: props.cat },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <article
      ref={dragRef}
      className={classNames("flex flex-col p-4 gap-3 rounded-xl bg-cyan-200", {
        "opacity-50": isDragging,
      })}
    >
      <img
        className="block object-cover aspect-square max-w-[300px] max-h-[300px]"
        src={props.cat.url}
      />

      {props.cat.breeds.length ? (
        props.cat.breeds.map((breed) => <p>{breed.name}</p>)
      ) : (
        <p>Unknown breed</p>
      )}

      <div className="flex flex-row-reverse justify-between">
        <ButtonFavourite active={props.favourite} onClick={props.onFavourite} />
      </div>
    </article>
  );
}
