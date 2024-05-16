import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/integration')({
  component: () => <div>Hello /integration!</div>
})