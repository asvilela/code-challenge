class RouteService {

  get() {
    return [
      {
        routeOrder: 1,
        pub: { id: 1, name: 'Stark', address: 'xxxxxxxxxxxxxxxx', zipCode: '00000001', latitude: '001', longitude: '001' },
        beers: [
          { beer: { id: 1, name: 'Pilsner', minTemp: '-6', maxTemp: '-4' }, quantity: 15, container: 1 },
          { beer: { id: 2, name: 'IPA', minTemp: '-6', maxTemp: '-5' }, quantity: 15, container: 2 },
          { beer: { id: 3, name: 'Lager', minTemp: '-7', maxTemp: '-4' }, quantity: 15, container: 3 }
        ],
        status: 'finished'
      },
      {
        routeOrder: 2,
        pub: { id: 2, name: 'Targaryen', address: 'xxxxxxxxxxxxxxxx', zipCode: '00000002', latitude: '002', longitude: '002' },
        beers: [
          { beer: { id: 1, name: 'Pilsner', minTemp: '-6', maxTemp: '-4' }, quantity: 15, container: 1 },
          { beer: { id: 2, name: 'IPA', minTemp: '-6', maxTemp: '-5' }, quantity: 15, container: 2 },
          { beer: { id: 3, name: 'Lager', minTemp: '-7', maxTemp: '-4' }, quantity: 15, container: 3 }
        ]
      },
      {
        routeOrder: 3,
        pub: { id: 3, name: 'Lannister', address: 'xxxxxxxxxxxxxxxx', zipCode: '00000003', latitude: '003', longitude: '003' },
        beers: [
          { beer: { id: 1, name: 'Pilsner', minTemp: '-6', maxTemp: '-4' }, quantity: 15, container: 1 },
          { beer: { id: 2, name: 'IPA', minTemp: '-6', maxTemp: '-5' }, quantity: 15, container: 2 },
          { beer: { id: 3, name: 'Lager', minTemp: '-7', maxTemp: '-4' }, quantity: 15, container: 3 }
        ]
      },
      {
        routeOrder: 4,
        pub: { id: 4, name: 'Baratheon', address: 'xxxxxxxxxxxxxxxx', zipCode: '00000004', latitude: '004', longitude: '004' },
        beers: [
          { beer: { id: 1, name: 'Pilsner', minTemp: '-6', maxTemp: '-4' }, quantity: 15, container: 1 },
          { beer: { id: 2, name: 'IPA', minTemp: '-6', maxTemp: '-5' }, quantity: 15, container: 2 },
          { beer: { id: 3, name: 'Lager', minTemp: '-7', maxTemp: '-4' }, quantity: 15, container: 3 }
        ]
      },
      {
        routeOrder: 5,
        pub: { id: 5, name: 'Greyjoy', address: 'xxxxxxxxxxxxxxxx', zipCode: '00000005', latitude: '005', longitude: '005' },
        beers: [
          { beer: { id: 1, name: 'Pilsner', minTemp: '-6', maxTemp: '-4' }, quantity: 15, container: 1 },
          { beer: { id: 2, name: 'IPA', minTemp: '-6', maxTemp: '-5' }, quantity: 15, container: 2 },
          { beer: { id: 3, name: 'Lager', minTemp: '-7', maxTemp: '-4' }, quantity: 15, container: 3 }
        ]
      },
      {
        routeOrder: 6,
        pub: { id: 6, name: 'Arryn', address: 'xxxxxxxxxxxxxxxx', zipCode: '00000006', latitude: '006', longitude: '006' },
        beers: [
          { beer: { id: 1, name: 'Pilsner', minTemp: '-6', maxTemp: '-4' }, quantity: 15, container: 1 },
          { beer: { id: 2, name: 'IPA', minTemp: '-6', maxTemp: '-5' }, quantity: 15, container: 2 },
          { beer: { id: 3, name: 'Lager', minTemp: '-7', maxTemp: '-4' }, quantity: 15, container: 3 }
        ]
      }
    ]
  }

}

export default new RouteService()
