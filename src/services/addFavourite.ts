export default function addFavourite(
  value: string,
  prevValues: string[],
  setValue: (value: string[]) => void
) {
  setValue([...prevValues, value]);
}
