import { PAGETYPE } from "./scrollType";

const initialState = {
  pageInfo: [],
};
export const ScrollPaginationStore = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case PAGETYPE:
      return {
        ...state,
        pageInfo: state.pageInfo.concat(payload),
      };
    default:
      return state;
  }
};
