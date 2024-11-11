export default function removeFavourite(
  toRemove: string,
  prevValues: string[],
  setValue: (value: string[]) => void
) {
  setValue(prevValues.filter((item) => item !== toRemove));
}
