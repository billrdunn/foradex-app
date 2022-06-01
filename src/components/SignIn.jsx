import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  formContainer: {
    margin: 20,
  },
  formStyle: {
    padding: 20,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 0,
    marginTop: 20,
    color: "black",
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    height: 50,
    borderRadius: 5,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 20
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .label("Username")
    .required("Username is required"),
  password: yup
    .string()
    .label("Password")
    .required("Password is required")
    .min(6),
});

const initialValues = {
  username: "",
  password: "",
};

function SignInForm({ onSubmit }) {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput style={styles.formStyle} name="username" placeholder="Username" />
      <FormikTextInput style={styles.formStyle} name="password" placeholder="Password" />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text fontWeight="bold" style={styles.buttonText}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
}

function SignIn() {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

export default SignIn;
