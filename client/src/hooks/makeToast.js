import cogoToast from "cogo-toast";
const useMakeToast = () => {
  const makeToast = (content, type = "", hideAfter = 1, heading = "") => {
    const options = {
      position: "top-right",
      heading,
      hideAfter,
      bar: { size: "5px" },
    };
    if (type === "success") cogoToast.success(content, options);
    else if (type === "error") cogoToast.error(content, options);
    else if (type === "warn") {
      cogoToast.warn(content, options);
    } else if (type === "info") {
      cogoToast.info(content, options);
    } else {
      cogoToast.info(content, options);
    }
  };

  return makeToast;
};

export default useMakeToast;
