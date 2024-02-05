import DeleteIcon from "../assets/icons8-delete-30.png";
import editIcon from "../assets/icons8-edit-48.png";

type TodoProps = {
  text: string;
  handleDelete: (id: number) => void;
  id: number;
};

export const Todo: React.FC<TodoProps> = ({ text, handleDelete, id }) => {
  return (
    <>
      <div className="flex gap-2 p-2">
        <input type="text" placeholder={text} className="grow" />
        <div className="flex gap-2">
          <button title="Edit">
            <img src={editIcon} width="24" height="24" />
          </button>
          <button title="Delete" onClick={() => handleDelete(id)}>
            <img src={DeleteIcon} width="24" height="24" />
          </button>
        </div>
      </div>
    </>
  );
};
