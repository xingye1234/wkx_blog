import React from 'react'
import {fetchUsers} from '../lib/action'

export default async function page() {
  const users = await fetchUsers()
  return (
    <div>dashboard</div>
  )
}
