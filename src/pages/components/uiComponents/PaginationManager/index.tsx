import Arrow from "../../../../assets/components/svg/arrow";
import { useTheme } from "styled-components";
import {
  PageArrowsHolder,
  PageNumber,
  PaginationBar,
  SelectPostsPerPage,
} from "./PaginationManager.styled";

type PaginationManagerProps = {
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
  itemsPerPage: string;
  setItemsPerPage: (newQuantity: string) => void;
};

const PaginationManager = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  setItemsPerPage,
}: PaginationManagerProps) => {
  const theme = useTheme();

  const substract = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const add = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePageInput: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const isValidPage = !isNaN(Number(target.value));
    if (isValidPage) {
      setCurrentPage(Number(target.value));
    }
  };

  return (
    <PaginationBar>
      <PageArrowsHolder>
        <div onClick={() => substract()}>
          <Arrow angle={180} size={25} color={theme.colors.secondary.main} />
        </div>
        <PageNumber
          type="text"
          onChange={handlePageInput}
          value={currentPage}
        />
        <div onClick={() => add()}>
          <Arrow angle={0} size={25} color={theme.colors.secondary.main} />
        </div>
      </PageArrowsHolder>
      <SelectPostsPerPage
        onChange={({ target }) => setItemsPerPage(target.value)}
        value={itemsPerPage}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </SelectPostsPerPage>
    </PaginationBar>
  );
};

export default PaginationManager;
