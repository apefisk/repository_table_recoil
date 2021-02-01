import { Loadable } from "recoil";

const checkLoadable = <T>(loadable: Loadable<T>) => {
  switch (loadable.state) {
    case "loading":
      return {
        contents: null,
        error: null,
        loading: true,
      };

    case "hasError":
      return {
        contents: null,
        error: loadable.contents,
        loading: false,
      };

    case "hasValue":
      return {
        contents: loadable.contents,
        error: null,
        loading: false,
      };

    default:
      return {
        contents: null,
        error: null,
        loading: false,
      };
  }
};

export default checkLoadable;
