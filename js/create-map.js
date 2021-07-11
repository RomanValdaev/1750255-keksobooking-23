// выполняем задание по созданию и отрисовке карты
function createMap () {
  const map = L.map('map')
    .on('load', () => {
      console.log('Карта инициализирована');
    })
    .setView(
      {
        lat: 35.65911,
        lng: 139.7453,
      },
      10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const marker = L.marker(
    {
      lat: 35.65911,
      lng: 139.7453,
    },
    {
      draggable: true,
    },
  );

  marker.addTo(map);
}

createMap();
export{createMap};
