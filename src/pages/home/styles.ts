import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00E5FF',
    textAlign: 'center',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 14,
    paddingBottom: 20,
    color: '#8A9DB0',
    marginTop: 8,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  card: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#151C2C',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1E2A40',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF3366',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#A0B2C6',
    lineHeight: 22,
    marginBottom: 12,
  },
  azul: {
    color: '#00E5FF',
    fontWeight: 'bold',
  },

});