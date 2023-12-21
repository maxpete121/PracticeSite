import { HighTier } from './models/HighTier.js'
import { Items } from './models/Items.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null


  /**@type {Items[]} */
  Item = []

  /**@type {HighTier[]} */
  HighTier = []
}

export const AppState = createObservableProxy(new ObservableAppState())