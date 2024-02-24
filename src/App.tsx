import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function App() {
  const ref = 34

  return (
    <div>
      <Button as={'a'} ref={ref}></Button>
      <Card as={'p'}></Card>
    </div>
  )
}
