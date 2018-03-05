'use strict'
import { EventListenerOptions, RegisterListener } from './interface'

const win: Window = window

/* istanbul ignore next */
const NOOP = () => {
  // empty
}
let uiEvtOpts = false

try {
  let opts = Object.defineProperty({}, 'passive', {
    get: /* istanbul ignore next */ () => {
      uiEvtOpts = true
    }
  })
  win.addEventListener('optsTest', NOOP, opts)
} catch (e) {
  // empty
}

const registerListener: RegisterListener = function r(
  ele: HTMLElement,
  eventName: string,
  callback: EventListener,
  opts: EventListenerOptions = {},
  unRegisterListenersCollection?: Function[]
): Function {
  if (!ele) throw new TypeError('Function requires "ele" parameter!')
  if (!eventName) throw new TypeError('Function requires "eventName" parameter!')
  if (!callback) throw new TypeError('Function requires "callback" parameter!')

  // use event listener options when supported
  // otherwise it's just a boolean for the "capture" arg
  const listenerOpts: any = uiEvtOpts
    ? {
        capture: !!opts.capture,
        passive: !!opts.passive
      }
    : !!opts.capture

  let unReg: Function
  if (!('addEventListener' in ele) || !('removeEventListener' in ele)) {
    throw new Error(
      'The current environment does not support addEventListener&removeEventListener!'
    )
  }

  // use the native addEventListener
  ele['addEventListener'](eventName, callback, listenerOpts)

  unReg = function unregisterListener() {
    ele['removeEventListener'](eventName, callback, listenerOpts)
  }

  if (unRegisterListenersCollection && Array.isArray(unRegisterListenersCollection)) {
    unRegisterListenersCollection.push(unReg)
  }

  return unReg
}

registerListener.uiEvtOpts = uiEvtOpts

export default registerListener
