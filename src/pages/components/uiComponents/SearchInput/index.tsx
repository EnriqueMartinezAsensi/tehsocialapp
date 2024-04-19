import Magnifier from "../../../../assets/components/svg/magnifier";
import ThemeSwitch from "../ThemeSwitch";
import { InputHolder, TextInput } from "./SearchImput.styled";

type SearchInputProps = {
  onChangeUserInput: React.ChangeEventHandler<HTMLInputElement>;
};
const SearchInput = ({ onChangeUserInput }: SearchInputProps) => {
  return (
    <InputHolder>
      <Magnifier />
      <TextInput placeholder="Search" onChange={onChangeUserInput} />
      <ThemeSwitch />
    </InputHolder>
  );
};

export default SearchInput;
