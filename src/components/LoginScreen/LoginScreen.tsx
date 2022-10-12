import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import {
  Link
} from "react-router-dom";
import { IconBrandTwitter, IconBrandGoogle } from '@tabler/icons';
import { useState } from 'react';
//import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';

export function AuthenticationForm(props:any) {

  //props: PaperProps
  const [type, toggle] = useToggle(['login', 'register']);
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const [wrong, setWrong] = useState(false)
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val:any) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val:any) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const logInWithEmailAndPassword = async (email:string, password:string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setWrong(false)
    } catch (err:any) {
      //console.error(err);
      //alert(err.message);
      setWrong(true)
    }
  };

  function Login(){
    const email = (form.getInputProps('email').value);
    const password = (form.getInputProps('password').value);
    console.log(user)
    logInWithEmailAndPassword(email,password)
    console.log(user)
  }

  return (
    <Paper style={{maxWidth:500}} radius="md" p="xl" 
    //withBorder 
    {...props}>
      <Text size="lg" weight={500}>
        Welcome to BattMatt, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <Button leftIcon={<IconBrandGoogle />} radius="xl">Google</Button>
        <Button leftIcon={<IconBrandTwitter />} radius="xl">Twitter</Button>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      {wrong&&<p style={{color:"red"}}>Wrong Email or Password</p>}

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button disabled={!form.values.terms&&type==='register'} type="submit" 
          //onClick={()=>props.login()
          onClick={()=>Login()}
          >{upperFirst(type)}</Button>
        </Group>
      </form>
    </Paper>
  );
}