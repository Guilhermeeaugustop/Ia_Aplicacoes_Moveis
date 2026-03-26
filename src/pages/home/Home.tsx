import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/button/button';
import { styles } from './styles';

export default function Home() {
  const navigation = useNavigation<any>();

  function handleLogout() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>INICIATIVA NEXUS</Text>
        <Text style={styles.subtitle}>Ano 3042 | Algoritha</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Alerta: Colapso Iminente</Text>

        <Text style={styles.description}>
          Bem-vindo a bordo da nave <Text style={styles.azul}>Apollo-Core</Text>, Engenheiro de Sistemas Interplanetários. Sou B.O.B., sua IA de suporte.
        </Text>

        <Text style={styles.description}>
          O Núcleo Lógico de <Text style={styles.azul}>Algoritha</Text> está cedendo à Grande Falha. Precisamos restaurar nosso lar.
        </Text>

        <Text style={styles.description}>
          Sua missão é explorar o sistema <Text style={styles.azul}>Kernel</Text> e extrair recursos dos planetas Variabilis, Itera-9, Ciclus e Matriz-0 para sintetizar um novo Núcleo.
        </Text>
      </View>

        <Button title="Desconectar do Terminal" onPress={handleLogout} />

    </View>
  );
}