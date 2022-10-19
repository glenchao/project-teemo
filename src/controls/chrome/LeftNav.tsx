import {
  Box,
  createStyles,
  MantineTheme,
  Navbar,
  UnstyledButton,
} from "@mantine/core";
import { useState } from "react";

export interface ILeftNavProps {
  isOpen: boolean;
}

interface ILeftNavLink {
  title: string;
  link: string;
}

const links: ILeftNavLink[] = [
  { title: "Asset info", link: "info" },
  {
    title: "Financials",
    link: "fin",
  },
];

interface ILeftNavItemProps {
  active: boolean;
  setActive: () => void;
  link: ILeftNavLink;
}

const useStyles = createStyles((theme: MantineTheme) => ({
  link: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    marginBottom: 8,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

function LeftNavItem(props: ILeftNavItemProps) {
  const { classes, cx } = useStyles();

  return (
    <UnstyledButton
      className={cx(classes.link, { [classes.active]: props.active })}
      onClick={props.setActive}
    >
      {props.link.title}
    </UnstyledButton>
  );
}

export function LeftNav({ isOpen }: ILeftNavProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const leftNavItems = links.map((link: ILeftNavLink, index: number) => (
    <LeftNavItem
      key={link.title}
      active={index === activeIndex}
      link={link}
      setActive={() => setActiveIndex(index)}
    />
  ));

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!isOpen}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section grow mt="md">
        <Box>{leftNavItems}</Box>
      </Navbar.Section>
    </Navbar>
  );
}
