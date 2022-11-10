import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

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
  },
  cover:{
    width: 311,
    height: 170,
    borderRadius: 8
  }, 
  conteinerList: {
    width: '100%'
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64, 
    alignItems: 'flex-start',
  },
  emptyList:{
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM, 
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }, 
  emptyListContent: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  }
});