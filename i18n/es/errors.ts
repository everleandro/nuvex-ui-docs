const errors = {
  validation: {
    required: 'Este campo es obligatorio',
    email: {
      invalid: 'Ingresa un correo valido',
    },
    minLength: 'Debe tener al menos {min} caracteres',
  },
} as const

export default errors