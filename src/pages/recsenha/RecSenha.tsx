import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { styles } from './styles';

export default function RecuperacaoSenha() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');

  function handleRecover() {
    console.log('Solicitação de recuperação para:', email);
    navigation.navigate('ResSenha');
  }

  return (
    <View style={styles.container}>
        <View style={styles.containerC}>
            <Text style={styles.title}>Recuperar Senha</Text>
            <Text style={styles.description}>
                Digite seu e-mail cadastrado. Enviaremos as instruções  para você redefinir sua senha.
            </Text>

            <Input
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <Button title="Enviar instruções" onPress={handleRecover} />

            <TouchableOpacity style={styles.linkButton} onPress={() => navigation.goBack()}>
                <Text style={styles.linkText}>Lembrou a senha? Voltar ao Login</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
}