import { useEffect, useState } from 'react'
import axios from 'axios'

import './styles.css';
import { Cards } from '../Cards';

export function Content() {

  interface PersonsProps {
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    origin: {
      name: string;
    }
    location: {
      name: string;
    }
    gender: string;
  }

  const [persons, setPersons] = useState<PersonsProps[]>([]);
  const [pages, setPages] = useState(1);

  function handleNextPage() {
    setPages(pages + 1)
    console.log(pages);

  }

  function handlePrevPage() {
    setPages(pages - 1)
  }


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${pages}`)
      .then(res => {
        setPersons(res.data.results);
        // console.log(res.data.results);
      })
  }, [pages])

  return (


    <main>
      <div className="box">
        <div className="header">
          {
            (
              pages == 1
                ?
                <button className="btn disabled">Prev</button>
                :
                <button className="btn" onClick={handlePrevPage}>Prev</button>

            )
          }
          {
            (
              pages == 42
                ?
                <button className="btn disabled">Next</button>
                :
                <button className="btn" onClick={handleNextPage}>Next</button>

            )
          }
        </div>
        <div className="cards-grid">
          {
            persons.map(persons => {
              return (
                <Cards
                  key={persons.id}
                  name={persons.name}
                  status={persons.status}
                  image={persons.image}
                  species={persons.species}
                  origin={persons.origin.name}
                  location={persons.location.name}
                  gender={persons.gender}
                />
              )
            })
          }
        </div>
      </div>
    </main>
  )
}