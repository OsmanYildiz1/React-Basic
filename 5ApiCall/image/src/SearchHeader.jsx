import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setvalueInput] = useState("");

  const handleFormSubmit = (event) => {
    search(valueInput); //searche valueinput değerini gönderir.
    event.preventDefault(); // onsubmitin sayfayı otomatik yenileme işlemini kapatır.
  };

  const handleChange = (event) => {
    setvalueInput(event.target.value); // inputtaki veriyi güncelledik.
  };
  return (
    //childdan parenta props ile api datayı aktarıcaz.
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        {/*onSubmit, entera tıklandığında tetiklenir. burda tetiklendiğinde props olarak geçilsin. */}
        <label>Ne Arıyorsunuz?</label>
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
