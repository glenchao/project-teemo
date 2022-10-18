import { useState } from "react";
import { Text } from "@mantine/core";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import { AssetForm } from "./controls/forms/AssetForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <AssetForm />
    </MantineProvider>
  );
}

export default App;
