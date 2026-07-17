const errors = {
  validation: {
    required: 'This field is required',
    email: {
      invalid: 'Enter a valid email',
    },
    minLength: 'Must be at least {min} characters',
  },
} as const

export default errors