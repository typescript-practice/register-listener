export interface EventListenerOptions {
  capture?: boolean
  passive?: boolean
}

export interface RegisterListener {
  (
    ele: HTMLElement,
    eventName: string,
    callback: EventListener,
    opts?: EventListenerOptions,
    unRegisterListenersCollection?: Function[]
  ): Function

  uiEvtOpts?: boolean
}
