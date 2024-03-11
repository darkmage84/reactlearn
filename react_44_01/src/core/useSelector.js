import { ProviderContext } from "./Provider";
import { useContext } from "react";

export const useSelector = () => {
  return useContext(ProviderContext);
};

export default useSelector;
