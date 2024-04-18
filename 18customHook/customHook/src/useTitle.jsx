import { useEffect } from "react";

function useTitle(num) {
  // istediğimiz yerde herhangi bir react hooksunu kullanır gibi kullanabiliriz.
  useEffect(() => {
    document.title = `Sayı ${num}`;
  }, [num]);
}

export default useTitle;
