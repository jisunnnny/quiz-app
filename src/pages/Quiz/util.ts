const getDifficulty = (dataKey: string) => {
  const targetValue = {
    easy: "🙂 easy",
    medium: "🤔 medium",
    hard: "🤯 hard",
  }[dataKey];

  return targetValue;
};

const getCategory = (dataKey: string) => {
  const targetValue = {
    27: "🐶 animals",
    25: "🎨 art",
    10: "📚 books",
    21: "🏀 sports",
  }[dataKey];

  return targetValue;
};

export { getDifficulty, getCategory };
