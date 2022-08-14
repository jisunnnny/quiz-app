import styled from "styled-components";

const Box = styled.ul`
  li {
    margin-left: 10px;
    font-weight: 400;

    input {
      margin-right: 5px;
    }
  }

  li:first-child {
    margin-top: 10px;
  }
  li:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

const HomePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;

  h1 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 30px;
  }
`;

const HomeSection = styled.section`
  width: 300px;
  height: auto;
  padding: 20px;
  background: ${({ theme }) => theme.colors.gray01};
  border-radius: 5px;
`;

const DifficultyBox = styled(Box)`
  font-weight: 600;
`;

const CategoryBox = styled(Box)`
  margin-bottom: 20px;
  font-weight: 600;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  margin-top: 30px;
  background: ${({ theme }) => theme.colors.blue03};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
`;

export { HomePageLayout, HomeSection, DifficultyBox, CategoryBox, Button };
