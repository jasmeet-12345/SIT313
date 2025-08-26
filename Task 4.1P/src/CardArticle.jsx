import "./CardArticle.css"
import { faker } from '@faker-js/faker';
import {
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

const CardArticle = () => (
  <section>
  <Card>
    <Image src={faker.image.avatar()}/>
    <CardContent>
      <CardHeader>{faker.book.title()}</CardHeader>
      <CardDescription>
        {faker.lorem.sentence(9)}
      </CardDescription>
    </CardContent>
    <CardContent extra className="card-footer">
      <div>
        <Icon name='star' color="yellow" />
       5 
      </div> 
      <div>
        {faker.book.author()}
      </div>
    </CardContent>
  </Card>
  </section>

)

export default CardArticle;