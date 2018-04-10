import {forEach, isNil, isObject, last, trimStart} from 'lodash'
const PATH_SEPARATOR = '/'
interface IDeepObject {
  [name: string]: any
}

const sulleong = (
  data: IDeepObject,
  map: IPairMap,
  opposite: boolean = false,
  prePath = '',
): object => {
  const mapper = (key: string) => {
    if(opposite){
      return map.toFrom(key)
    }
    return map.fromTo(key)
  }
  const result: IDeepObject = {}
  let _value, _key
  forEach(data, (value, key: string) => {
    _value = value
    _key = trimStart(`${prePath}${PATH_SEPARATOR}${key}`, PATH_SEPARATOR)
    if(isObject(value)){
      _value = sulleong(value, map, opposite, _key)
    }
    result[mapper(_key)] = _value
  })
  return result
}

// noinspection JSUnusedGlobalSymbols
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
    return last(nextKey.split(PATH_SEPARATOR))
  }

  fromTo(keyName: string): string {
    let nextKey = this._to[this._from.indexOf(keyName)]
    if(isNil(nextKey)){
      nextKey = keyName
    }
    return last(nextKey.split(PATH_SEPARATOR))
  }

  private _flat(
    data: IDeepObject,
    prePath: IPrePath = {},
    options: IPairMapOptions = {},
  ) {
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
      myFrom = trimStart(`${pFrom}${PATH_SEPARATOR}${from}`, PATH_SEPARATOR)
      myTo = trimStart(`${pTo}${PATH_SEPARATOR}${_to}`, PATH_SEPARATOR)
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
