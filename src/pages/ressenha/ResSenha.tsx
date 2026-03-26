import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { styles } from './styles';

export default function ResetarSenha() {
  const navigation = useNavigation<any>();
  
  const [codigo, setCodigo] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  function handleReset() {
    console.log('Resetando senha com código:', codigo);
    
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  return (
    <View style={styles.container}>
        <View style={styles.containerC}>
      <Text style={styles.title}>Nova Senha</Text>
      <Text style={styles.description}>
        Digite o código de 6 dígitos que enviamos para o seu e-mail e crie uma nova senha.
      </Text>

      <Input
        placeholder="Código de verificação"
        keyboardType="number-pad"
        value={codigo}
        onChangeText={setCodigo}
      />

      <Input
        placeholder="Nova senha"
        secureTextEntry
        value={novaSenha}
        onChangeText={setNovaSenha}
      />

      <Input
        placeholder="Confirmar nova senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <Button title="Redefinir Senha" onPress={handleReset} />

      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Cancelar e voltar ao Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}