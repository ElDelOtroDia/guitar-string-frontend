import { FormikErrors, FormikTouched } from "formik";

export const useShowError =
  (touched: FormikTouched<any>, error: FormikErrors<any>) => (key: string) => {
    return <p className="string-error">{touched[key] && error[key] ? error[key] : " "}</p>;
  };
