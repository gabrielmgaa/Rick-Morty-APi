import { IsAlive } from '../IsAlive';
import './styles.css'

interface CardsProps {
  name: string;
  status: string;
  image: string;
  species: string;
  origin: string;
  location: string;
  gender: string;
}

export function Cards(props: CardsProps) {
  return (
    <div className="cards">
      <div className="img">
        <img className="image" src={props.image} />
      </div>
      <div className="content">
        <div className="title">
          <h2>{props.name}</h2>
          <IsAlive status={props.status}  species={props.species} gender={props.gender}/>
        </div>
        <div className="child">
          <h2>Local de Origem</h2>
          <p>{props.origin}</p>
        </div>
        <div className="last-know">
          <h2>Ultima Localização</h2>
          <p>{props.location}</p>
        </div>
      </div>
    </div>
  )
}