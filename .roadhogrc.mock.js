
export default {
  "/api/ip":(req, res)=>{
    res.json({
      table:[
        {
          id: 1,
          ip:'10.1.1.2',
          company:'HK',
          services:[
            's1',
            's2',
            's4',
          ]
        }
      ]
    })
  }
};
