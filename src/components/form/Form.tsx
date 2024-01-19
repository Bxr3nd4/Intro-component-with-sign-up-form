import styles from "./Form.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function MyForm() {
  const ValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name cannot be empty"),
    lastName: Yup.string().required("Last Name cannot be empty"),
    email: Yup.string()
      .email("Looks like this is not an email")
      .required("Email cannot be empty"),
    password: Yup.string().required("Password cannot be empty"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: () => {
      console.log("Form submitted");
    },
  });
  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentButton}>
          <button className={styles.btn_action}>
            Try it free 7 days then $20/mo. thereafter
          </button>
        </div>
        <div className={styles.form}>
          <form id="form" onSubmit={formik.handleSubmit}>
            <div className={styles.contentForm}>
              <input
                type="text"
                placeholder=" First Name"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </div>
            <button type="submit" id="submit-btn">
              Claim your free trial
            </button>
            <p className={styles.text}>
              By clicking the button, you are agreeing to our{" "}
              <a href="#">Terms and Services</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default MyForm;
