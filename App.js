import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Maria Gabriela Oliveira Costa</Text>
      <Text>Desenvolvimento de Dispositivos </Text>
      <Text>Aula DDM - 29/2</Text>
      <Text>13/03</Text>
      <br></br>
      <Button title='Salvar'></Button>
      <Button title='entrar'></Button>
      <Button title='Apagar'></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
