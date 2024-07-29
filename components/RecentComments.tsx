'use client'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function RecentComments({ articleId }) {
  const { data, error } = useSWR(`/api/comments?articleId=${articleId}`, fetcher, {
    refreshInterval: 10000 // Reîmprospătează la fiecare 10 secunde
  })

  if (error) return <div>Failed to load comments</div>
  if (!data) return <div>Loading comments...</div>

  return (
    <ul>
      {data.map((comment) => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  )
}