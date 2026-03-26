import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import SingIn from '../singin/SingIn';

export default function Login() {

  const navigation = useNavigation<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    console.log('Tentativa de login com:', email, password);
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerC}>

        <Text style={styles.title}>Bem-vindo!</Text>

        <Input
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        />

        <Input
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        />

        <Button title="Entrar" onPress={() => navigation.navigate('Home')} />

        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('RecuperacaoSenha')}>
          <Text style={styles.linkText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>

      </View>
    </View>

  );
}