import { Logout } from '@/assets/icons'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export function App() {
  return (
    <div>
      <Button icon={<Logout />}>Button</Button>
      <Typography>Some text</Typography>
    </div>
  )
}
