import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center'
  },
  header: {
    width: "100%",
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 32,
    marginTop: 0,
    justifyContent: 'space-between'
  }, 
  right:{
    width: 20,
    height: 20
  },
  logo: {
    width: 72,
    height: 40
  }
});