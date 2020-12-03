import _ from 'lodash'

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export const required = () => v => (_.isNil(v) ? 'Povinné' : undefined)

export const isNumber = () => v =>
  !_.isFinite(Number(v)) ? 'Nie je číslo' : undefined

export const min = minValue => v =>
  _.toNumber(v) < minValue ? `Musí byť aspoň ${minValue}` : undefined
