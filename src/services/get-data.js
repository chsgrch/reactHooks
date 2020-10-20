export default class Swapi {
  _baseUrl = 'https://swapi.dev/api'

  async downloadData(url) {
    let result = await fetch(`${this._baseUrl}${url}`)
    if (!result.ok)
      throw new Error(
        `Could not fetch ${url}, 
      received ${result.status}`
      );
    return await result.json()
  }

  getPlanet = async (id) => {
    return await this.downloadData(`/planets/${id}/`)
  }
}