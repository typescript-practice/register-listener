'use strict'

import registerListener from '../src/register-listener'

const MouseEventArray = [
  'click',
  true,
  true,
  document.defaultView,
  0,
  0,
  0,
  0,
  0,
  false,
  false,
  false,
  false,
  0,
  null
]

describe('Basic', function() {
  it('registerListener()', function(cb) {
    const handler = () => {
      cb()
    }
    const body = document.body
    registerListener(body, 'click', handler)
    const events = document.createEvent('MouseEvent')
    events.initMouseEvent.apply(events, MouseEventArray)
    body.dispatchEvent(events)
  })

  it('unReg()', function(cb) {
    const handler = () => {
      cb()
    }
    const ele: any = {
      addEventListener() {
        // empty
      },
      removeEventListener() {
        cb()
      }
    }
    const unReg = registerListener(ele, 'click', handler)
    unReg()
  })

  it('unRegisterListenersCollection()', function() {
    const unRegisterListenersCollection: Function[] = []
    let count = 0

    const handler = () => {
      // empty
    }
    const ele: any = {
      addEventListener() {
        // empty
      },
      removeEventListener() {
        count++
      }
    }
    registerListener(ele, 'click', handler, {}, unRegisterListenersCollection)
    registerListener(ele, 'click', handler, {}, unRegisterListenersCollection)
    registerListener(ele, 'click', handler, {}, unRegisterListenersCollection)

    unRegisterListenersCollection.forEach(fn => {
      fn()
    })

    expect(count).toEqual(3)
  })

  it('uiEvtOpts', function() {
    const handler = () => {
      // empty
    }
    const ele: any = {
      addEventListener() {
        // empty
      },
      removeEventListener() {
        // empty
      }
    }
    registerListener(ele, 'click', handler)
    expect((registerListener as any)._uiEvtOpts).toEqual(false)
  })

  it('invalid', function() {
    const handler = () => {
      // empty
    }

    expect(() => {
      const el: any = null
      registerListener(el, 'click', handler)
    }).toThrow(TypeError)

    expect(() => {
      const eventName: any = null
      registerListener(document.body, eventName, handler)
    }).toThrow(TypeError)

    expect(() => {
      const handler: any = null
      registerListener(document.body, 'click', handler)
    }).toThrow(TypeError)

    expect(() => {
      const el: any = {
        addEventListenerFake: function() {
          // empty
        }
      }
      registerListener(el, 'click', handler)
    }).toThrow(Error)
  })
})
