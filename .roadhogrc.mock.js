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
          id: 2,
          ips:  [
            '2.2.2.3',
            '2.2.2.7',
          ],
          service:"亚洲",
          servicesId: 2
        }
      ]
    })
  },
  "/api/ip/list/1": (req, res) => {
    console.log(req.query.id);
    res.json({
      ipList: [
        "10.1.1.2",
        "10.2.2.4"
      ]
    })
  },
  "/api/ip/list/2": (req, res) => {
    res.json({
      ipList: [
        "2.2.2.3",
        "2.2.2.4",
        "2.2.2.5",
        "2.2.2.6",
        "2.2.2.7",
      ]
    })
  }
};
