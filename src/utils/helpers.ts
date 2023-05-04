export const upperFirst = (str?: string) => {
  const words = str?.split(" ");
  const formattedWords: string[] = [];
  words?.forEach(item => {
    const word = item?.toLowerCase?.();
    const formattedWord = word?.charAt(0)?.toUpperCase?.() + word?.slice?.(1);
    if (formattedWord) {
      formattedWords.push(formattedWord);
    }
  });
  return formattedWords.join(" ");
};
