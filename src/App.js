
import { createContext, useState } from 'react';
import './App.css';
import { Images } from './components/Images';
import { Jumbutron } from './components/Jumbutron';
import { SearchField } from './components/SearchField';
import useAxois from './hooks/useAxois';

//Create Context
export const ImageContext =  createContext();

function App() {
  const [searchImage, setSearchImage] = useState('')
  const {response, isLoading, error, fetchData} = useAxois(`search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  console.log(response);

const value = {
  response,
  isLoading,
  error,
  fetchData,
  searchImage,
  setSearchImage
}

  return (
    <ImageContext.Provider value={ value}>
   <Jumbutron>
    <SearchField/>
   </Jumbutron>
   <Images/>
   </ImageContext.Provider>
  
  );
}

export default App;
