import { StyleSheet } from 'react-native'

import { blueDark, gray500, gray600, gray700 } from '../../tokens/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray600,
  },
  header: {
    backgroundColor: gray700,
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newTask: {
    flexDirection: 'row',
    gap: 4,
    padding: 20,
    marginTop: -52,
  },
  input: {
    flex: 1,
    fontSize: 16,
    backgroundColor: gray500,
    borderRadius: 8,
    padding: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    backgroundColor: blueDark,
    borderRadius: 8,
    width: 52,
  },
})
