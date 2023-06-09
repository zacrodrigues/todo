import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import Logo from '../../../public/logo.svg'

import { gray300 } from '../../tokens/colors'

import { EmptyList } from '../../components/EmptyList'
import { TaskBox } from '../../components/TaskBox'

import { styles } from './styles'

interface Task {
  task: string
  isChecked: boolean
}

export function Home() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  const tasksChecked = tasks.filter((task) => task.isChecked)

  function handleAddNewTask() {
    setTasks((prevState) => [...prevState, { task: newTask, isChecked: false }])
    setNewTask('')
  }

  function handleCheckTask(task: Task) {
    const copyTasks = [...tasks]
    const taskIndex = copyTasks.findIndex((item) => item.task === task.task)
    copyTasks[taskIndex].isChecked = !task.isChecked
    setTasks(copyTasks)
  }

  function handleRemoveTask(task: Task) {
    const copyTasks = [...tasks]
    const newArray = copyTasks.filter((item) => item.task !== task.task)
    setTasks(newArray)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.newTask}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={gray300}
          style={styles.input}
          onChangeText={setNewTask}
          value={newTask}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
          <AntDesign name="pluscircleo" size={16} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.headerTasks}>
        <View style={styles.created}>
          <Text style={styles.createdTitle}>Criadas</Text>
          <Text style={styles.counter}>{tasks.length}</Text>
        </View>
        <View style={styles.completed}>
          <Text style={styles.completedTitle}>Concluídas</Text>
          <Text style={styles.counter}>{tasksChecked.length}</Text>
        </View>
      </View>

      {tasks.length === 0 ? (
        <>
          <View style={styles.divider} />

          <EmptyList />
        </>
      ) : (
        <View style={styles.taskList}>
          {tasks.map((task) => (
            <TaskBox
              key={task.task}
              task={task}
              handleCheckTask={handleCheckTask}
              handleRemoveTask={handleRemoveTask}
            />
          ))}
        </View>
      )}
    </View>
  )
}
