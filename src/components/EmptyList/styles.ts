import { StyleSheet } from 'react-native'
import { gray300 } from '../../tokens/colors'

export const styles = StyleSheet.create({
  empty: {
    padding: 20,
    marginTop: 48,
    alignItems: 'center',
  },
  emptyIcon: {
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 14,
    color: gray300,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 14,
    color: gray300,
  },
})
