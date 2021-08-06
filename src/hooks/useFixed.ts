import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { getScrollTop } from "../lib/utlis";

const useFixed = (): [MutableRefObject<HTMLDivElement>, boolean] => {
  const element = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [fixed, setFixed] = useState(false);

  const onScroll = useCallback(() => {
    setScrollTop(getScrollTop());
    const isFixed = scrollTop > 10;
    setFixed(isFixed);
  }, [scrollTop]);

  useEffect(() => {
    onScroll();
    return () => {
      setFixed(false);
    };
  }, [scrollTop]);

  // register scroll event
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return [element, fixed];
};

export default useFixed;
