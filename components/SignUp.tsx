import { Box, Button, Text, TextInput } from "grommet";
import { useState } from "react";

const SignUp = () => {
  const [pageState, setPageState] = useState({
    value: "",
    focus: false,
  });

  return (
    <Box justify="between" align="center" alignSelf="center" gap="medium">
      <Box
        border={{ side: "bottom", color: pageState.focus ? "focus" : "brand" }}
        width="large"
      >
        <TextInput
          color="brand"
          plain
          placeholder={<Text size="small">your email address</Text>}
          value={pageState.value}
          onChange={(event) =>
            setPageState({ value: event.target.value, focus: true })
          }
          onFocus={() => setPageState({ value: pageState.value, focus: true })}
          onBlur={() => setPageState({ value: pageState.value, focus: false })}
        />
      </Box>
      <Button onClick={() => {}}>
        <Box
          round="xlarge"
          background="brand"
          pad={{ vertical: "small", horizontal: "medium" }}
        >
          <Text size="small" weight="bold" textAlign="center">
            Subscribe
          </Text>
        </Box>
      </Button>
    </Box>
  );
};

export default SignUp;
