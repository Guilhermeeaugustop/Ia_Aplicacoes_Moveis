import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { styles } from './styles';

export default function Cadastro() {
  const navigation = useNavigation<any>();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister() {
    console.log('Tentativa de cadastro com:', name, email);
    
    navigation.navigate('Login'); 
  }

  return (
    <View style={styles.container}>
        <View style={styles.containerC}>
      <Text style={styles.title}>Crie sua conta</Text>

      <Input
        placeholder="Nome completo"
        value={name}
        onChangeText={setName}
      />

      <Input
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="Crie uma senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Cadastrar" onPress={handleRegister} />

      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Já tem uma conta? Faça Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}