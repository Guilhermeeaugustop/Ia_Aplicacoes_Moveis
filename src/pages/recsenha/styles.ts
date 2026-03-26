import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  containerC : {
    backgroundColor: '#151C2C',
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  linkButton: {
    alignItems: 'center',
    marginTop: 16,
  },
  linkText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
});