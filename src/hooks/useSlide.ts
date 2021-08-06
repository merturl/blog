import { useState } from "react";

const useSlide = (total): [number, () => void, () => void] => {
  const [slideIndex, setSlideIndex] = useState(0);

  const onClickHandler = (isLeft: boolean) => {
    return () => {
      const newValue = isLeft ? slideIndex - 1 + total : slideIndex + 1;
      setSlideIndex(newValue % total);
    };
  };

  return [slideIndex, onClickHandler(true), onClickHandler(false)];
};

export default useSlide;
