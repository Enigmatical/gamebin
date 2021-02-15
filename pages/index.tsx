import Link from 'next/link';
import { Button, Card } from 'react-bootstrap'
import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
`

const PageIndex = () => {
  return (
    <Layout>
      <Card>
        <Card.Body>
          <Card.Title>Create Location</Card.Title>
          <Card.Text>
            Create a new location for games.  This can be a physical location (shelf, closet) or a service (Steam, Epic).
          </Card.Text>
          <Link href="/locations/create" passHref>
            <Button variant="primary">Go</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Create Game</Card.Title>
          <Card.Text>
            Create a new game.
          </Card.Text>
          <Link href="/games/create" passHref>
            <Button variant="primary">Go</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  )
}

export default PageIndex
