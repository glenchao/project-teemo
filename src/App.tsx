import { AppShell, Grid, MantineProvider } from "@mantine/core";
import { useState } from "react";
import "./App.css";
import { Header } from "./controls/chrome/Header";
import { LeftNav } from "./controls/chrome/LeftNav";
import { AssetForm } from "./controls/forms/asset/AssetForm";

function App() {
  const [leftNavIsOpen, setLeftNavIsOpen] = useState<boolean>(false);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <AppShell
        padding="md"
        header={
          <Header
            leftNavIsOpen={leftNavIsOpen}
            toggleLeftNav={() => setLeftNavIsOpen(!leftNavIsOpen)}
          />
        }
        navbarOffsetBreakpoint="sm"
        navbar={<LeftNav isOpen={leftNavIsOpen} />}
      >
        <AssetForm />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
