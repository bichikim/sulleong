import {forEach, isNil, isObject, last, trimStart} from 'lodash'
const sulleong = (data, map: IPairMap, opposite: boolean = false, prePath = '') => {
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
      _value = sulleong(value, map, opposite, _key)
    }
    result[mapper(_key)] = _value
  })
  return result
}

export default sulleong

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
    let _to, skip, enterDeep, myFrom, myTo
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
      myFrom = trimStart(`${pFrom}/${from}`, '/')
      myTo = trimStart(`${pTo}/${_to}`, '/')
      this._from.push(myFrom)
      this._to.push(myTo)
      if(enterDeep){
        this._flat(to, {
          pFrom: myFrom,
          pTo: myTo,
        }, options)
      }
    })
  }
}
