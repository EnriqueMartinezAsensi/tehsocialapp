import Magnifier from "../../../../assets/components/svg/magnifier";
import ThemeSwitch from "../ThemeSwitch";
import { InputHolder, TextInput } from "./SearchImput.styled";
import { useTranslation } from "react-i18next";

type SearchInputProps = {
  onChangeUserInput: React.ChangeEventHandler<HTMLInputElement>;
};
const SearchInput = ({ onChangeUserInput }: SearchInputProps) => {
  const { t } = useTranslation();
  return (
    <InputHolder>
      <Magnifier />
      <TextInput placeholder={t("search-input")} onChange={onChangeUserInput} />
      <ThemeSwitch />
    </InputHolder>
  );
};

export default SearchInput;
