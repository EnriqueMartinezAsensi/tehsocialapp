import Magnifier from "../../../../assets/components/svg/magnifier";
import "./style.css";

type SearchInputProps = {
  onChangeUserInput: React.ChangeEventHandler<HTMLInputElement>;
};
const SearchInput = ({ onChangeUserInput }: SearchInputProps) => {
  return (
    <label className="searchInput">
      <Magnifier />
      <input placeholder="Search" onChange={onChangeUserInput} />
    </label>
  );
};

export default SearchInput;
