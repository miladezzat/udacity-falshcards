import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  KeyboardAvoidingView
} from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../utils/theme'

const InputText = ({ errorText, ...props }) => (
  <KeyboardAvoidingView behavior='padding' style={styles.container}>
    <Input style={styles.input} mode='outlined' {...props} />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </KeyboardAvoidingView>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 12
  },
  input: {
    marginBottom: 20
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4
  }
})

export default InputText
