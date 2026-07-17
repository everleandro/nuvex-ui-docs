import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { createValidationRules } from '~/utils/validation-rules'

export const useValidationRules = () => {
  const { t } = useI18n()

  const ruleFactory = computed(() => {
    return createValidationRules({
      required: t('errors.validation.required'),
      email: t('errors.validation.email.invalid'),
      minLength: (min) => t('errors.validation.minLength', { min }),
    })
  })

  const requiredRule = computed(() => {
    return ruleFactory.value.required()
  })

  const emailRule = computed(() => {
    return ruleFactory.value.email()
  })

  const passwordRule = computed(() => {
    return ruleFactory.value.minLength(6)
  })

  return {
    requiredRule,
    emailRule,
    passwordRule,
    minLengthRule: (min: number) => ruleFactory.value.minLength(min),
  }
}