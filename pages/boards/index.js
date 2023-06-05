import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const SEARCH = gql`
  query{
    fetchBoards{
      _id
      writer
      contents
      title
      createdAt
    }
  }
`
export default function index() {
  const router = useRouter();
  const { data } = useQuery(SEARCH);

  console.log(data)
  return (
    
  )
}
