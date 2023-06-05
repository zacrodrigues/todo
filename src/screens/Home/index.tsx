import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import AntDesign from '@expo/vector-icons/AntDesign'

import Logo from '../../../public/logo.svg'
import { gray300 } from '../../tokens/colors'

import { styles } from './styles'

export function Home() {
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
        />

        <TouchableOpacity style={styles.button}>
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

      <View style={styles.divider} />
    </View>
  )
}
