import { useContext } from 'react';
import { LocalContext } from './localContext';

export const useLocalContext = () => {
  return useContext(LocalContext);
};

export const useLanguage =  (constantText) => {
  const {language} = useLocalContext();
  return  constantText[language]?? constantText['en'];
}