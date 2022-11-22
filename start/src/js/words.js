import dictionary from './dictionary';
//random word from the dictionary
export const getWord = () => dictionary[Math.floor(Math.random() * dictionary.length)];
/*
the function checks if the entered word is in dictionary
*/
export const isInDictionary = (word) => dictionary.includes(word);
