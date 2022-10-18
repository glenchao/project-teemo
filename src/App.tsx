import { useState } from "react";
import { Text } from "@mantine/core";
import "./App.css";
import { MantineProvider } from "@mantine/core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <Text>Hello world</Text>
    </MantineProvider>
  );
}

export default App;
