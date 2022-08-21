import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = () => {
    return (
        <div className="cards-align">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://c.tenor.com/FQCyuq7nSmYAAAAC/megaman-dance.gif" />
                <Card.Body>
                    <Card.Title>Megaman Face</Card.Title>
                    <Card.Text>
                        Megaman
                    </Card.Text>
                    <Button variant="primary">Click</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://c.tenor.com/FR8i7oYwRisAAAAC/rock-on-mega-man.gif" />
                <Card.Body>
                    <Card.Title>Weird Megaman</Card.Title>
                    <Card.Text>
                        Megaman Rocks
                    </Card.Text>
                    <Button variant="primary">Click</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.gifer.com/BXo8.gif" />
                <Card.Body>
                    <Card.Title>Running Megaman</Card.Title>
                    <Card.Text>
                        Megaman still rocks!
                    </Card.Text>
                    <Button variant="primary">Click</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media3.giphy.com/media/sqctAhcpUOFJC/giphy.gif" />
                <Card.Body>
                    <Card.Title>Megaman fases</Card.Title>
                    <Card.Text>
                        Megaman colors
                    </Card.Text>
                    <Button variant="primary">Click</Button>
                </Card.Body>
            </Card>           
        </div>        
    )
}

export default Cards;