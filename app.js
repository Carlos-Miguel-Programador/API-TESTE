const Express = require('express');

const app = Express();

app.get('/', (req, res)=>{
    return res.json({
        "usuarios": [
            {
              "ID": 1,
              "Nome": "Carlos",
              "Senha": "3325ggf",
              "Data_Inscricao": "2024-01-31T10:06:34.000Z"
            },
            {
              "ID": 2,
              "Nome": "Mateus",
              "Senha": "12sa",
              "Data_Inscricao": "2024-01-31T10:06:44.000Z"
            },
            {
              "ID": 3,
              "Nome": "Rosário",
              "Senha": "vhj3478",
              "Data_Inscricao": "2024-01-31T10:06:58.000Z"
            },
            {
              "ID": 4,
              "Nome": "Madalena",
              "Senha": "vhj37",
              "Data_Inscricao": "2024-01-31T10:07:10.000Z"
            },
            {
              "ID": 5,
              "Nome": "Alexandre",
              "Senha": "673rgha",
              "Data_Inscricao": "2024-01-31T10:07:22.000Z"
            },
            {
              "ID": 6,
              "Nome": "Afonso",
              "Senha": "367dvhjka",
              "Data_Inscricao": "2024-01-31T10:07:37.000Z"
            },
            {
              "ID": 7,
              "Nome": "Manuel",
              "Senha": "7834hjd",
              "Data_Inscricao": "2024-01-31T10:07:49.000Z"
            },
            {
              "ID": 8,
              "Nome": "Fonseca",
              "Senha": "98ufg",
              "Data_Inscricao": "2024-01-31T10:08:06.000Z"
            },
            {
              "ID": 9,
              "Nome": "Rosário",
              "Senha": "hgca562",
              "Data_Inscricao": "2024-01-31T17:13:41.000Z"
            },
            {
              "ID": 10,
              "Nome": "Afonso Mateus",
              "Senha": "gat2563f",
              "Data_Inscricao": "2024-01-31T17:24:24.000Z"
            },
            {
              "ID": 1,
              "Nome": "Afonso Mateus",
              "Senha": "gat2563f",
              "Data_Inscricao": "2024-01-31T17:25:21.000Z"
            },
            {
              "ID": 12,
              "Nome": "Jade Mateus",
              "Senha": "12343221#",
              "Data_Inscricao": "2024-01-31T17:33:58.000Z"
            },
            {
              "ID": 13,
              "Nome": "Jade Mateus",
              "Senha": "12343221#",
              "Data_Inscricao": "2024-01-31T17:35:33.000Z"
            },
            {
              "ID": 14,
              "Nome": "Hosana Mateus",
              "Senha": "*/*34%3221#",
              "Data_Inscricao": "2024-01-31T17:38:27.000Z"
            },
            {
              "ID": 15,
              "Nome": "Hosana Mateus",
              "Senha": "*/*34%3221#",
              "Data_Inscricao": "2024-01-31T17:39:08.000Z"
            },
            {
              "ID": 16,
              "Nome": "Tomás",
              "Senha": "tomas123##",
              "Data_Inscricao": "2024-01-31T20:16:29.000Z"
            },
            {
              "ID": 17,
              "Nome": "cristina",
              "Senha": "tomas123##",
              "Data_Inscricao": "2024-01-31T20:18:36.000Z"
            },
            {
              "ID": 18,
              "Nome": "Natanael Bengue",
              "Senha": "*123#",
              "Data_Inscricao": "2024-01-31T20:28:33.000Z"
            },
            {
              "ID": 19,
              "Nome": "Hernane",
              "Senha": "*123#",
              "Data_Inscricao": "2024-01-31T20:33:04.000Z"
            },
            {
              "ID": 20,
              "Nome": "Hernane",
              "Senha": "*123#",
              "Data_Inscricao": "2024-01-31T20:33:42.000Z"
            }
          ],
    })
});

app.listen(process.env.PORT || 8080);