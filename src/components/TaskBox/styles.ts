import { StyleSheet } from 'react-native'

import { gray100, gray300, gray400, gray500 } from '../../tokens/colors'

export const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: gray500,
    padding: 12,
    borderRadius: 8,
    borderColor: gray400,
    borderWidth: 1,
    marginBottom: 8,
  },
  taskChecked: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: gray500,
    padding: 12,
    borderRadius: 8,
    borderColor: gray500,
    borderWidth: 1,
    marginBottom: 8,
  },
  taskDescription: {
    color: gray100,
    flex: 1,
    fontSize: 16,
  },
  taskDescriptionChecked: {
    color: gray300,
    flex: 1,
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
})
