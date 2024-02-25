import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function App() {
  return (
    <div>
      <Button disabled variant={'secondary'}>
        Secondary Disabled
      </Button>
      <Card as={'p'}>Some text</Card>
      <a style={{ backgroundColor: 'green', display: 'flex' }}>Tag</a>
    </div>
  )
}
