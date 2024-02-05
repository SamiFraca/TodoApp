type ButtonProps = {
  buttonColor: string;
  buttonText: string;
};
export function Button(props: ButtonProps) {
  return (
    <>
      <button
        className={`px-4 py-2 font-bold text-white bg-${props.buttonColor}-500 rounded hover:bg-${props.buttonColor}-700`}
      >
        {props.buttonText}
      </button>
    </>
  );
}
