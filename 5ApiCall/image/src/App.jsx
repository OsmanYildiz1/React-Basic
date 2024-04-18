import "./App.css";
import ImageList from "./Components/ImageList";
import SearchHeader from "./SearchHeader";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term); // apideki verileri değişkene attık
    setImages(result); // use state ile apiden gelenleri images'a aktardık
  };
  return (
    <>
      <div className="App">
        <SearchHeader search={handleSubmit} />
        <ImageList imagesPlaceHolder={images} />{" "}
        {/* useStateki dönen içerikleri prop olarak geçtik */}
      </div>
    </>
  );
}

export default App;
