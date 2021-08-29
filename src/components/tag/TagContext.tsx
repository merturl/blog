import React, { createContext, useEffect, useState } from "react";

type TagContextValue = {
  value: string;
  set(value: string): void;
};

export const TagContext = createContext<TagContextValue>({
  value: "all",
  set: () => {},
});

const parseSearch = (str: string) => {
  if (!str) return [];
  const clearStr = str.replace(/^\?/, "");
  const separator = "&";
  const parts = clearStr.split(separator);
  return parts.map(part => {
    const separator = "=";
    const [, value] = part.split(separator);
    return value;
  });
};

export const TagProvider = ({ children }) => {
  const [value, setValue] = useState("all");
  useEffect(() => {
    const search = parseSearch(window.location.search);
    if (search.length > 0) {
      setValue(search[0]);
    }
  }, []);
  return (
    <TagContext.Provider
      value={{
        value,
        set: setValue,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};

export default TagContext;
