import React from 'react';

export default function TodoDetail(props) {
  console.log(props)
  const {id, name} = props.match.params
  return (
    <div>
      <h1>ini halaman TodoDetail {id} {name}</h1>
      <button onClick={() => props.history.push('/todos')}>Pindah</button>
    </div>
  )
}