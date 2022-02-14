import { render } from "@testing-library/react";
import Pagination from '../../components/Pagination';

const mockPrevNav = {
    page: 1
  };

const mockNextNav = {
    page: 6,
    totalPages: 6
}

  const onChangePageMock = jest.fn();

  describe("Test Pagination Component", () => {
     test("Validate go to prev page is disabled when on first page", () => {
      const screen = render(
        <Pagination
          page={mockPrevNav.page}
          onChangePage={onChangePageMock}
        />
      );
  
      expect(screen.getByText("<")).toBeDisabled();
     });

     test("Validate go to next page is disabled when on last page", () => {
        const screen = render(
          <Pagination
            page={mockNextNav.page}
            totalPages={mockNextNav.totalPages}
            onChangePage={onChangePageMock}
          />
        );
    
        expect(screen.getByText(">")).toBeDisabled();
      });
    });
  