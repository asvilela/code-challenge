
class BeerService {

  get() {
    return [
      { id: 1, name: 'Pilsner', maxTemp: '-4', minTemp: '-6' },
      { id: 2, name: 'IPA', maxTemp: '-5', minTemp: '-6' },
      { id: 3, name: 'Lager', maxTemp: '-4', minTemp: '-7' },
      { id: 4, name: 'Stout', maxTemp: '-6', minTemp: '-8' },
      { id: 5, name: 'Wheat beer', maxTemp: '-3', minTemp: '-5' },
      { id: 6, name: 'Pale Ale', maxTemp: '-4', minTemp: '-6' }
    ]
  }

}

export default new BeerService()
