import { Burger, Header as HeaderBase, MediaQuery, Text } from "@mantine/core";

export interface IHeaderProps {
  leftNavIsOpen: boolean;
  toggleLeftNav: () => void;
}

export function Header({ leftNavIsOpen, toggleLeftNav }: IHeaderProps) {
  return (
    <HeaderBase height={70} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            size="sm"
            mr="xl"
            opened={leftNavIsOpen}
            onClick={toggleLeftNav}
          />
        </MediaQuery>
        <Text>Project Teemo</Text>
      </div>
    </HeaderBase>
  );
}
