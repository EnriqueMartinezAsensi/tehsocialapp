import "./styles.css";
import Arrow from "../../../../assets/components/svg/arrow";

type PaginationManagerProps = {
  placeholder: string;
  onChangeUserInput: React.ChangeEventHandler<HTMLInputElement>;
  substract: () => void;
  add: () => void;
  changePostPerPage: React.ChangeEventHandler<HTMLSelectElement>;
};

const PaginationManager = ({
  placeholder,
  onChangeUserInput,
  substract,
  add,
  changePostPerPage,
}: PaginationManagerProps) => {
  return (
    <div className="pagination">
      <div onClick={() => substract()}>
        <Arrow angle={180} size={25} color="#aaa" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChangeUserInput}
      />
      <div onClick={() => add()}>
        <Arrow angle={0} size={25} color="#aaa" />
      </div>
      <select onChange={changePostPerPage}>
        <option value="All">All</option>
        <option value="5">5</option>
        <option value="10" selected={true}>
          10
        </option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default PaginationManager;
