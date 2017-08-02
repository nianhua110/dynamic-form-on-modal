export default {
  "/api/ip": (req, res) => {
    res.json({
      servicesList: [
        {
          id: 1,
          name: '西南'
        },
        {
          id: 2,
          "name": "亚洲"

        }
      ],
      table: [
        {
          id: 1,
          ip: '10.1.1.2',
          company: 'HK',
          services: [
            's1',
            's2',
            's4',
          ]
        }
      ]
    })
  },
  "/api/ip/list": (req, res) => {
    console.log(req.query.id);
    if(req.query.id === `2`){
      res.json({
        ipList: [
          "2.2.2.3",
          "2.2.2.4",
          "2.2.2.5",
          "2.2.2.6",
          "2.2.2.7",
        ]
      })
      return;
    }
    res.json({
      ipList: [
        "10.1.1.2",
        "10.2.2.4"
      ]
    })
  }
};
