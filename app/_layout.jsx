import { Stack, stack } from "expo-router";

export default RootLayout = () => {
  return (
    <Stack>
      <Stack.screen
        name="(home)"
        option={{ homeShown: false, title: "Home" }}
      />
      <Stack.screen name="about" option={{ title: "About" }} />
    </Stack>
  );
};
