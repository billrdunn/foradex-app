import Text from "./Text";

function SubheadingText({ text }) {
  return (
    <Text fontWeight="bold" fontSize="subheading">
      {text}
    </Text>
  );
}

export default SubheadingText;
