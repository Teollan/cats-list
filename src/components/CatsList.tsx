import { Cat } from "../util/types/Cat";
import CatCard from "./CatCard";
import CatCardSpot from "./CatCardSpot";

type CatsListProps = {
  cats: Cat[];
  favourites: string[];
  onFavourite: (id: string) => void;
  onDrop: (id: string, index: number) => void;
};

export default function CatsList(props: CatsListProps) {
  return (
    <div className="grid grid-cols-3 gap-3 items-center">
      {props.cats.map((cat, index) => {
        const isFavourite = props.favourites.includes(cat.id);

        return (
          <CatCardSpot
            key={cat.id}
            place={index + 1}
            onDrop={(cat) => props.onDrop(cat.id, index)}
          >
            <CatCard
              cat={cat}
              favourite={isFavourite}
              onFavourite={() => props.onFavourite(cat.id)}
            />
          </CatCardSpot>
        );
      })}
    </div>
  );
}
