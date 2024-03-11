import Magnifier from "../../../../assets/components/svg/magnifier";
import { InputHolder, TextInput } from "./SearchImput.styled";

type SearchInputProps = {
  onChangeUserInput: React.ChangeEventHandler<HTMLInputElement>;
};
const SearchInput = ({ onChangeUserInput }: SearchInputProps) => {
  return (
    <InputHolder>
      <Magnifier />
      <TextInput placeholder="Search" onChange={onChangeUserInput} />
    </InputHolder>
  );
};

export default SearchInput;
