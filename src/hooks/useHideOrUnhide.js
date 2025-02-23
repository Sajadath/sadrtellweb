import { useDispatch } from "react-redux";
import { menuHiderOff, menuHiderOn } from "../ui/shader/shaderSlice";

export function useHideOrUnhide() {
  const dispatch = useDispatch();
  function toggleHider(hider) {
    if (hider === "hide") {
      dispatch(menuHiderOn());
    }
    if (hider === "show") {
      dispatch(menuHiderOff());
    }
  }
  return toggleHider;
}
