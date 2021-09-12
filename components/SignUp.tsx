import { API } from "aws-amplify";
import { Box, Button, FormField, Text, TextInput } from "grommet";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { subscribe } from "../src/graphql";
import Subscribed from "./Subscribed";

const SignUp = () => {
  const [emailState, setEmailState] = useState({
    value: "",
    focus: false,
  });
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (!emailState.value) return;
    setLoading(true);

    try {
      await API.graphql({
        query: subscribe,
        variables: { email: emailState.value },
      });
      setSubscribed(true);
    } catch {
      toast.error("Something went wrong please try again later");
    }

    setLoading(false);
  };

  return (
    <Box justify="between" align="center" alignSelf="center" gap="medium">
      {subscribed && <Subscribed />}
      {!subscribed && (
        <Box
          border={{
            side: "bottom",
            color: emailState.focus ? "focus" : "brand",
          }}
          width="large"
        >
          <TextInput
            color="brand"
            plain
            placeholder={<Text size="small">your email address</Text>}
            value={emailState.value}
            onChange={(event) =>
              setEmailState({ value: event.target.value, focus: true })
            }
            onFocus={() =>
              setEmailState({ value: emailState.value, focus: true })
            }
            onBlur={() =>
              setEmailState({ value: emailState.value, focus: false })
            }
            type="email"
          />
        </Box>
      )}
      {!subscribed && (
        <Button onClick={handleSubscribe} disabled={loading}>
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
      )}
    </Box>
  );
};

export default SignUp;
