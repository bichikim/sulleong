import forEach from 'lodash/forEach'
import isNil from 'lodash/isNil'
import isObject from 'lodash/isObject'
import last from 'lodash/last'
import trimStart from 'lodash/trimStart'
export const swap = (data, map: PairMap, opposite: boolean = false, prePath = '') => {
  const mapper = (key) => {
    if(opposite){
      return map.toFrom(key)
    }
    return map.fromTo(key)
  }
  const result = {}
  let _value, _key
  forEach(data, (value, key: string) => {
    _value = value
    _key = trimStart(`${prePath}/${key}`, '/')
    if(isObject(value)){
      _value = swap(value, map, opposite, _key)
    }
    result[mapper(_key)] = _value
  })
  return result
}

export interface IData {
  [key: string]: string
}

export interface IPairMap {
  toFrom(keyName: string): string
  fromTo(keyName: string): string
}

export interface IPairMapOptions {
  selfFlag?: string
}

export interface IPrePath {
  pFrom?: string
  pTo?: string
}

export class PairMap implements IPairMap {
  private _from: string[] = []
  private _to: string[] = []
  constructor(data: IData, options: IPairMapOptions = {}) {
    this._flat(data, {}, options)
  }

  toFrom(keyName: string): string {
    let nextKey = this._from[this._to.indexOf(keyName)]
    if(isNil(nextKey)){
      nextKey = keyName
    }
    return last(nextKey.split('/'))
  }

  fromTo(keyName: string): string {
    let nextKey = this._to[this._from.indexOf(keyName)]
    if(isNil(nextKey)){
      nextKey = keyName
    }
    return last(nextKey.split('/'))
  }

  private _flat(data, prePath: IPrePath = {}, options: IPairMapOptions = {}) {
    const {pFrom = '', pTo = ''} = prePath
    const {selfFlag = '@'} = options
    let _to, skip, enterDeep
    forEach(data, (to, from) => {
      _to = to
      skip = false
      enterDeep = false
      if(isObject(to)){
        const selfTo = to[selfFlag]
        if(!selfTo){
          skip = true
        }
        _to = selfTo
        enterDeep = true
      }
      if(skip || from === selfFlag){
        return true
      }
      this._from.push(trimStart(`${pFrom}/${from}`, '/'))
      this._to.push(trimStart(`${pTo}/${_to}`, '/'))
      if(enterDeep){
        this._flat(to, {
          pFrom: trimStart(`${pFrom}/${from}`, '/'),
          pTo: trimStart(`${pTo}/${_to}`, '/'),
        }, options)
      }
    })
  }
}
