# Documentation of my api
my json format is
*{name:String,roll:Number} example {"name":"Abdur Rahim",roll:41}

1)`GET` `https://abirsrestfullapi.herokuapp.com/notes` to see all content of saved app
2)`GET` `https://abirsrestfullapi.herokuapp.com/notes/noteId` to the content of the ID
example{
  to see 
          {
            "_id": "5dde1dc8a2751e000427c649",
            "name": "Abir",
            "roll": 41,
            "createdAt": "2019-11-27T06:55:04.214Z",
            "updatedAt": "2019-11-27T06:55:04.214Z",
            "__v": 0
        }
        this content
        we have to call GET  https://abirsrestfullapi.herokuapp.com/notes/5dde1dc8a2751e000427c649

}

3)`POST` `https://abirsrestfullapi.herokuapp.com/notes` then give a like my json format content

4)`PUT` `https://abirsrestfullapi.herokuapp.com/notes` and give a json format content

5)`DELETE` `https://abirsrestfullapi.herokuapp.com/notes/noteId` to delete the id related content
