import type { ApiPropReferenceRow } from '~/api-reference/schema'

export type EFieldInheritedReferenceOptionsEs = {
  labelBehaviorType: string
  labelBehaviorDescription: string
  rulesType: string
}

export const buildEFieldInheritedApiReferenceEs = (
  options: EFieldInheritedReferenceOptionsEs,
): ApiPropReferenceRow[] => {
  return [
    {
      property: 'clearable',
      description: 'Muestra accion de limpiar cuando existe valor.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'color',
      description: 'Color base de tema aplicado al estado e interacciones del field.',
      type: { value: 'string', class: 'string' },
      default: { value: '"primary"', class: 'string' },
    },
    {
      property: 'outlined',
      description: 'Usa variante visual outlined para el contenedor del field.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'disabled',
      description: 'Desactiva interaccion y evita actualizar valor.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'readonly',
      description: 'Evita edicion manteniendo comportamiento de foco.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'dense',
      description: 'Aplica espaciado vertical mas compacto heredado de Field.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'retainColor',
      description: 'Mantiene estilo de color activo despues de foco/interaccion.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'label',
      description: 'Texto de etiqueta del field.',
      type: { value: 'string | number', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'labelMinWidth',
      description: 'Ancho minimo reservado para la region de etiqueta.',
      type: { value: 'string | number', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'labelBehavior',
      description: options.labelBehaviorDescription,
      type: { value: options.labelBehaviorType, class: 'string' },
      default: { value: '"static"', class: 'string' },
    },
    {
      property: 'inputAlign',
      description: 'Alineacion horizontal del texto dentro del area de input/seleccion.',
      type: { value: 'left | right | center | start | end', class: 'string' },
      default: { value: '"start"', class: 'string' },
    },
    {
      property: 'prependIcon',
      description: 'Icono renderizado en la region externa izquierda.',
      type: { value: 'string | IconPath | IconPath[]', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'prependInnerIcon',
      description: 'Icono renderizado antes del contenido dentro del frame del input.',
      type: { value: 'string | IconPath | IconPath[]', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'appendInnerIcon',
      description: 'Icono renderizado despues del contenido dentro del frame del input.',
      type: { value: 'string | IconPath | IconPath[]', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'appendIcon',
      description: 'Icono renderizado en la region externa derecha.',
      type: { value: 'string | IconPath | IconPath[]', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'detail',
      description: 'Texto de ayuda mostrado en el area de detalles cuando no hay errores.',
      type: { value: 'string', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'detailsOnMessageOnly',
      description: 'Muestra el area de detalles solo cuando existen mensajes/errores.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'rules',
      description: 'Reglas de validacion evaluadas contra modelValue.',
      type: { value: options.rulesType, class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'detailErrors',
      description: 'Mensajes de error explicitos renderizados en el area de detalles.',
      type: { value: 'string[]', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
  ]
}
