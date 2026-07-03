export type ValidationValue = string | number | null | undefined

export type ValidationRule = (value: ValidationValue) => true | string

export interface ValidationRuleMessages {
  required: string
  email: string
  minLength: (min: number) => string
}

const toTrimmedString = (value: ValidationValue): string => {
  return String(value ?? '').trim()
}

export const createValidationRules = (messages: ValidationRuleMessages) => {
  const required = (): ValidationRule => {
    return (value) => {
      return toTrimmedString(value).length > 0 || messages.required
    }
  }

  const email = (): ValidationRule => {
    return (value) => {
      const normalized = toTrimmedString(value)
      return /\S+@\S+\.\S+/.test(normalized) || messages.email
    }
  }

  const minLength = (min: number): ValidationRule => {
    return (value) => {
      return toTrimmedString(value).length >= min || messages.minLength(min)
    }
  }

  return {
    required,
    email,
    minLength,
  }
}