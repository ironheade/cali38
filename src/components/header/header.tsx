import { useEffect, useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Paper, Transition, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBarbell } from '@tabler/icons';
import { Link, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getAuth } from "firebase/auth";
import logo from '../../resources/Kreis_Hangman_SVG.svg'


import useScrollDirection from '../../functions/scrollDirection';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    //position: 'relative',
    transitionDuration: "1s",
    position: 'sticky',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
  changeOpenState: any;
  active:any;
  setActive:any
}

export function HeaderResponsive({ links, changeOpenState, active, setActive
}: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  //const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const auth = getAuth();
  const [logged, setLogged] = useState<Object | null>(null)

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(
      authUser => {
        authUser
          ? setLogged(authUser)
          : setLogged(null);
      },
    );
    return () => {
      unlisten();
    }
  }, []);

  const scrollDirection = useScrollDirection();

  const location = useLocation();
  useEffect(() => { setActive(location.pathname) }, [])

  function Login() {
    changeOpenState(true)
    close();
  }
  function Logout() {
    auth.signOut()
  }

  const items = links.map((link, index) => (
    <Link
      key={index}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >{link.label}</Link>
  ));

  useEffect(() => { logged && changeOpenState(false) }, [logged])

  const logbutton = <Button key="logbutton" variant='outline'
    onClick={() => {
      !logged ? Login() : Logout()
    }}
  >{logged ? "Logout" : "login"}</Button>

  return (
    <Header height={HEADER_HEIGHT} mb={0} className={classes.root}
      style={{ transform: scrollDirection === "down" ? 'translateY(-' + HEADER_HEIGHT + 'px)' : "translateY(0px)" }}
    >
      <Container size="xl" className={classes.header}>
        {/*<MantineLogo size={28} />*/}
        <img src={logo} width="50" />

        <Group spacing={5} className={classes.links}>
          {[...items]}
          {/*[...items,logbutton]*/}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {[...items]}
              {/*[...items,logbutton]*/}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
