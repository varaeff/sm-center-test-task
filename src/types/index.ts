interface SelectOption {
  value: string
  text: string
}

export interface FormField {
  type: 'input' | 'select' | 'checkbox' | 'textarea'
  label: string
  name: string
  options?: SelectOption[]
  placeholder?: string
  required?: boolean
}

export interface FormValues {
  [key: string]: string | boolean
}
