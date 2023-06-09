import { Text, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { gray400 } from '../../tokens/colors'

import { styles } from './styles'

export function EmptyList() {
  return (
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
  )
}
