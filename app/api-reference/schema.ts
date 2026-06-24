export interface ApiCellToken {
  value: string
  class?: string
}

export interface ApiPropReferenceRow {
  property: string
  description: string
  type: ApiCellToken
  default: ApiCellToken
}

export interface ComponentApiReference {
  props: ApiPropReferenceRow[]
}
