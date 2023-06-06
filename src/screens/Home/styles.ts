import { StyleSheet } from 'react-native'

import {
  blue,
  blueDark,
  gray200,
  gray400,
  gray500,
  gray600,
  gray700,
  purple,
  gray100,
  gray300,
} from '../../tokens/colors'

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
  logo: {
    height: 100,
  },
  newTask: {
    flexDirection: 'row',
    gap: 4,
    padding: 20,
    marginTop: -48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    backgroundColor: gray500,
    borderRadius: 8,
    padding: 12,
    color: gray100,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: blueDark,
    borderRadius: 8,
    width: 52,
  },
  headerTasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  created: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  createdTitle: {
    color: blue,
    fontWeight: 'bold',
    fontSize: 14,
  },
  completed: {
    flexDirection: 'row',
    gap: 8,
  },
  completedTitle: {
    color: purple,
    fontWeight: 'bold',
    fontSize: 14,
  },
  counter: {
    backgroundColor: gray400,
    color: gray200,
    fontSize: 12,
    fontWeight: 'bold',
    padding: 1,
    borderRadius: 999,
    width: 25,
    textAlign: 'center',
  },
  divider: {
    backgroundColor: '#333',
    height: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
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
  taskList: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    gap: 8,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: gray500,
    padding: 12,
    borderRadius: 8,
    borderColor: gray400,
    borderWidth: 1,
  },
  taskDescription: {
    color: gray100,
    flex: 1,
    fontSize: 16,
  },
})
