import { pageService } from "../services/paginationService";
import { PAGETYPE } from "./scrollType";

export const getPaginationAction = (pageNumber: number) => {
  return async (dispatch: any) => {
    const res = await pageService(pageNumber);

    dispatch({ type: PAGETYPE, payload: res.data.hits });
  };
};
