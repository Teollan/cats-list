import classnames from "classnames";

type ButtonFavouriteProps = {
  active?: boolean;
  onClick?: () => void;
};

export default function ButtonFavourite(props: ButtonFavouriteProps) {
  return (
    <button
      className={classnames(
        "block w-[40px] h-[40px] rounded-full text-gray-500 hover:text-black",
        { "text-red-500": props.active }
      )}
      onClick={props.onClick}
    >
      {"<3"}
    </button>
  );
}
