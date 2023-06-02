import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'
import { gray300 } from '../../tokens/colors'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: '#fff' }}>LOGOTIPO</Text>
      </View>

      <View style={styles.newTask}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={gray300}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
