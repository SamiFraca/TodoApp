import { Button } from "./Button";
export function AddTodo() {
  return (
    <>
      <div className="absolute min-w-full min-h-full backdrop-grayscale opacity-20 "></div>
      <div className="absolute left-0 right-0 z-10 flex flex-col max-w-lg m-auto bg-black rounded-sm min-w-80 min-h-80 ">
        <div className="flex flex-col items-center justify-center gap-4 pt-5 pb-5 pl-8 pr-8">
          <p>What task do you want to add?</p>
          <input placeholder="Type..." className="w-full p-2 rounded-sm" />
          <div className="flex gap-4">
            <Button buttonText="Add" buttonColor="green" />
            <Button buttonColor="red" buttonText="Cancel" />
          </div>
        </div>
      </div>
    </>
  );
}
