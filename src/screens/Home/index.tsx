import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons'

import Logo from '../../../public/logo.svg'

import { blue, gray300, gray400 } from '../../tokens/colors'

import { styles } from './styles'

export function Home() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<string[]>([])

  function handleAddNewTask() {
    setTasks((prevState) => [...prevState, newTask])
    setNewTask('')
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
          <Text style={styles.counter}>0</Text>
        </View>
        <View style={styles.completed}>
          <Text style={styles.completedTitle}>Concluídas</Text>
          <Text style={styles.counter}>0</Text>
        </View>
      </View>

      {tasks.length === 0 ? (
        <>
          <View style={styles.divider} />

          <View style={styles.empty}>
            <Ionicons
              name="clipboard-outline"
              size={56}
              color={gray400}
              style={styles.emptyIcon}
            />
            <Text style={styles.emptyTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        </>
      ) : (
        <View style={styles.taskList}>
          {tasks.map((task) => (
            <View key={task} style={styles.task}>
              <Entypo name="circle" size={16} color={blue} />
              <Text style={styles.taskDescription}>{task}</Text>
              <Ionicons name="trash-outline" size={16} color={gray300} />
            </View>
          ))}
        </View>
      )}
    </View>
  )
}
