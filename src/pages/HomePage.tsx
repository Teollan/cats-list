import { useEffect, useState } from "react";
import CatsList from "../components/CatsList";
import fetchCats from "../services/fetchCats";
import { Cat } from "../util/types/Cat";
import useLocalStorage from "../hooks/useLocalStorage";
import { FAVOURITES, POSITION_OVERRIDE } from "../util/constants";
import removeFavourite from "../services/removeFavourite";
import addFavourite from "../services/addFavourite";

export default function HomePage() {
  const [favouriteIds, setFavouriteIds] = useLocalStorage<string[]>(
    FAVOURITES,
    []
  );

  const [positionOverrides, setPositionOverrides] = useLocalStorage<{
    [key: string]: number;
  }>(POSITION_OVERRIDE, {});

  const [cats, setCats] = useState<Cat[]>(null!);

  useEffect(() => {
    fetchCats().then(setCats);
  }, []);

  const toggleFavourite = (id: string) => {
    if (favouriteIds.includes(id)) {
      removeFavourite(id, favouriteIds, setFavouriteIds);
    } else {
      addFavourite(id, favouriteIds, setFavouriteIds);
    }
  };

  const overrideCatPosition = (id: string, index: number) => {
    console.log(`cat with id [${id}] to positon [${index}]`);
  };

  return (
    <div className="flex flex-col items-center p-10">
      <main className="flex flex-col w-full max-w-[1200px] gap-10">
        <h1 className="text-3xl text-center">Our best cats</h1>

        {cats && (
          <CatsList
            cats={cats}
            favourites={favouriteIds}
            onFavourite={toggleFavourite}
            onDrop={overrideCatPosition}
          />
        )}
      </main>
    </div>
  );
}
