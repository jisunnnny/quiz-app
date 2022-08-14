import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { categoryState, difficultyState } from "states/quiz";
import RadioButton from "./RadioButton";

import { HomePageLayout, HomeSection, DifficultyBox, CategoryBox, Button } from "./home.style";

const DIFFICULTY_LIST = [
  { name: "easy", label: "🙂 easy" },
  { name: "medium", label: "🤔 medium" },
  { name: "hard", label: "🤯 hard" },
];
const CATEGORY_LIST = [
  { name: "27", label: "🐶 animals" },
  { name: "25", label: "🎨 art" },
  { name: "10", label: "📚 books" },
  { name: "21", label: "🏀 sports" },
];

const Home = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useRecoilState(categoryState);
  const [difficulty, setDifficulty] = useRecoilState(difficultyState);

  const handleClickCategoryButton = (item: string) => {
    setCategory(item);
  };

  const handleClickDifficultyButton = (item: string) => {
    setDifficulty(item);
  };

  const handleStartButtonClick = () => {
    navigate("/quiz");
  };

  return (
    <HomePageLayout>
      <h1>Choose a quiz topic and level!</h1>
      <HomeSection>
        <CategoryBox>
          Topic :
          <RadioButton list={CATEGORY_LIST} initValue={category} onClick={handleClickCategoryButton} />
        </CategoryBox>
        <DifficultyBox>
          Level :
          <RadioButton list={DIFFICULTY_LIST} initValue={difficulty} onClick={handleClickDifficultyButton} />
        </DifficultyBox>
      </HomeSection>
      <Button onClick={handleStartButtonClick}>START</Button>
    </HomePageLayout>
  );
};

export default Home;
