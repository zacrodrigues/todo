import { Text, View } from 'react-native'

import { Ionicons, FontAwesome } from '@expo/vector-icons'

import { blue, gray300, purpleDark } from '../../tokens/colors'

import { styles } from './styles'

interface Task {
  task: string
  isChecked: boolean
}

interface TaskBoxProps {
  task: Task
  handleCheckTask: (task: Task) => void
  handleRemoveTask: (task: Task) => void
}

export function TaskBox({
  task,
  handleCheckTask,
  handleRemoveTask,
}: TaskBoxProps) {
  return (
    <View style={task.isChecked ? styles.taskChecked : styles.task}>
      <FontAwesome
        name={task.isChecked ? 'check-circle' : 'circle-o'}
        size={16}
        color={task.isChecked ? purpleDark : blue}
        onPress={() => handleCheckTask(task)}
      />
      <Text
        style={
          task.isChecked
            ? styles.taskDescriptionChecked
            : styles.taskDescription
        }
      >
        {task.task}
      </Text>
      <Ionicons
        name="trash-outline"
        size={16}
        color={gray300}
        onPress={() => handleRemoveTask(task)}
      />
    </View>
  )
}
