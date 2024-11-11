import { useEffect, useState } from "react";
import CatsList from "../components/CatsList";
import { Cat } from "../util/types/Cat";
import { FAVOURITES } from "../util/constants";
import useLocalStorage from "../hooks/useLocalStorage";
import fetchCatsById from "../services/fetchCatsById";
import removeFavourite from "../services/removeFavourite";
import addFavourite from "../services/addFavourite";

export default function FavouritesPage() {
  const [favouriteIds, setFavouriteIds] = useLocalStorage<string[]>(
    FAVOURITES,
    []
  );
  const [favourites, setFavourites] = useState<Cat[]>(null!);

  useEffect(() => {
    fetchCatsById(favouriteIds).then(setFavourites);
  }, [favouriteIds]);

  const toggleFavourite = (id: string) => {
    if (favouriteIds.includes(id)) {
      removeFavourite(id, favouriteIds, setFavouriteIds);
    } else {
      addFavourite(id, favouriteIds, setFavouriteIds);
    }
  };

  const rearrangeFavourites = (id: string, index: number) => {
    setFavouriteIds(
      favouriteIds.filter((item) => item !== id).splice(index, 0, id)
    );
  };

  return (
    <CatsList
      cats={favourites}
      favourites={favouriteIds}
      onFavourite={toggleFavourite}
      onDrop={rearrangeFavourites}
    />
  );
}
