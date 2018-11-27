
class PubService {

  get() {
    return [
      { id: 1, name: 'Stark', address: 'xxxxxxxxxxxxxxxx', zipCode: '00000001', latitude: '001', longitude: '001' },
      { id: 2, name: 'Targaryen', address: 'xxxxxxxxxxxxxxxx', zipCode: '00000002', latitude: '002', longitude: '002' },
      { id: 3, name: 'Lannister', address: 'xxxxxxxxxxxxxxxx', zipCode: '00000003', latitude: '003', longitude: '003' },
      { id: 4, name: 'Baratheon', address: 'xxxxxxxxxxxxxxxx', zipCode: '00000004', latitude: '004', longitude: '004' },
      { id: 5, name: 'Greyjoy', address: 'xxxxxxxxxxxxxxxx', zipCode: '00000005', latitude: '005', longitude: '005' },
      { id: 6, name: 'Arryn', address: 'xxxxxxxxxxxxxxxx', zipCode: '00000006', latitude: '006', longitude: '006' },
      { id: 7, name: 'Tully', address: 'xxxxxxxxxxxxxxxx', zipCode: '00000007', latitude: '007', longitude: '007' }
    ]
  }

}

export default new PubService()
