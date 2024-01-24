import styles from "./Form.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import IconError from "../../assets/icon-error.svg";

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

  const noError = Object.keys(formik.errors).length === 0;

  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentButton}>
          <button className={styles.btn_action}>
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </button>
        </div>
        <div className={styles.form}>
          <form id="form" onSubmit={formik.handleSubmit}>
            <div
              className={styles.contentForm}
              style={{ color: "hsl(0, 100%, 74%) ", gap: noError ? "20px" : "8px" }}
            >
              <input
                type="text"
                placeholder=" First Name"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <>
                  <span>{formik.errors.firstName}</span>
                  <div className={styles.imgContainer}>
                    <img src={IconError} />
                  </div>
                </>
              ) : null}
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <>
                  <span>{formik.errors.lastName}</span>
                  <div className={styles.imgContainer}>
                    <img src={IconError} />
                  </div>
                </>
              ) : null}
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <>
                  <span>{formik.errors.email}</span>
                  <div className={styles.imgContainer}>
                    <img src={IconError} />
                  </div>
                </>
              ) : null}
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <>
                  <span>{formik.errors.password}</span>
                  <div className={styles.imgContainer}>
                    <img src={IconError} />
                  </div>
                </>
              ) : null}
            </div>
            <button type="submit" id="submit-btn">
              Claim your free trial
            </button>
            <p className={styles.text}>
              By clicking the button, you are agreeing to our
              <a href="#">Terms and Services</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default MyForm;
