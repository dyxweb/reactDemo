import React, { useState } from 'react';
import useConnect from '../../hooks/useConnect';

export function CompA() {
  const [value, setValue] = useState('')
  const [state, dispatch] = useConnect((state)=> ({ mesB : state.mesB }))
  return (
    <div>
      <p>组件A</p>
      <p>组件B对我说: {state.mesB}</p>
      <input onChange={(e) => setValue(e.target.value)} placeholder="对B组件说" />
      <button onClick={() => dispatch({ type: 'setA', payload: value })}>确定</button>
    </div> 
  )
}

export function CompB() {
  const [value, setValue] = useState('')
  const [state, dispatch] = useConnect((state)=> ({ mesA : state.mesA }))
  return (
    <div>
      <p>组件B</p>
      <p>组件A对我说: {state.mesA}</p>
      <input onChange={(e) => setValue(e.target.value)} placeholder="对A组件说" />
      <button onClick={() => dispatch({ type:'setB', payload:value })}>确定</button>
    </div>
  )
}

export function CompC() {
  const [state] = useConnect((state) => ({ mesA : state.mesA, mesB : state.mesB }))
  return (
    <div>
      <p>组件A:{state.mesA}</p>
      <p>组件B:{state.mesB}</p>
    </div>
  )
}

export function CompD() {
  const [,dispatch] = useConnect()
  return (
    <div>
      <button onClick={() => dispatch({ type:'clear' })}>清空</button>
    </div>
  )
}