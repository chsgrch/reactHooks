import React, { useEffect, useState } from 'react'
import Swapi from '../../services/get-data'

const swService = new Swapi()

const getPlanet = (id) => {
  return swService.getPlanet(id)
}

const useRequest = async (request) => {
  const [dataState, setDataState] = useState(null)
  const result = null;
  useEffect(() => {
    let cancelled = false
    request().then(data => setDataState(data))
    return () => cancelled = true
  }, [request])
  if (dataState !== null) return dataState
}

const usePlanetName = (id) => {
  const [planetName, changePlanetName] = useState('')
  const [complete, changeCompleteStatus] = useState(false)

  const update = () => {
    swService.getPlanet(id)
      .then(planet => {
        changePlanetName(planet.name)
        changeCompleteStatus(true);
      })
      .catch(() => changeCompleteStatus(false))
  }

  useEffect(() => { //componentDidUpdate
    console.log('componentDidUpdate')
    let cancelled = false;
    if (!cancelled) { update() };
    return () => cancelled = true
  }, [id])

  if (!complete) return complete
  else return planetName
}

const usePlanetInfo = async (id) => {
  const request = () => getPlanet(id)
  console.log('===> ', await useRequest(request))
}

const PlanetInfo = ({ id }) => {

  const res = usePlanetName(id)
  // const res2 = usePlanetInfo(id)

  if (res !== false) {
    return (
      <div>
        <p>
          Planet info by id |{id}|. Planet name is {res}
        </p>
      </div>
    )
  }
  else return <p>Error in get data from server, try later ...</p>
}

export default PlanetInfo