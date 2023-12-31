# API REST Node.js

API REST para gerenciar filmes e estúdios desenvolvida com Node.js, JavaScript, Mongoose, MongoDB e Express.js..

<p align="left">
  <img alt="Repo's top languages" src="https://img.shields.io/static/v1?label=Main%20technology&message=Node.js&style=for-the-badge&color=007D9C&labelColor=000000">
</p>

## Endpoints

endpoints relacionados a um CRUD de **filmes**
 
<table>
  <tr>
    <th>Request name</th>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Request body</th>
    <th>Returns</th>
  </tr>
  

  <tr>
    <td>RegisterFilm</td>
    <td>POST</td>
    <td><i>/film</i></td>
    <td>JSON with the properties <br /> <code>title: string, description: string, image_url: string, trailer_url: string, release_year: number, studioId: number, name_studio: number</td>
    <td>The register movie</td>
  </tr>

  <tr>
    <td>ListFilm</td>
    <td>GET</td>
    <td><i>/film</i></td>
    <td>No body</td>
    <td>All Movies</td>
  </tr>

  <tr>
    <td>ListFilmByStudio</td>
    <td>GET</td>
    <td><i>film/studio/{StudioId}</i></td>
    <td>No body</td>
    <td>All Movies by Studio</td>
  </tr>

   <tr>
    <td>UpdateFilm</td>
    <td>PUT</td>
    <td><i>/film/{filmId}</i></td>
    <td>JSON with the properties <br /> <code>title: string, description: string, image_url: string, trailer_url: string, release_year: number, studioId: number, name_studio: number</code></td>
    <td>The update movie </td>
  </tr>

  <tr>
    <td>DeleteFilm</td>
    <td>DELETE</td>
    <td><i>/film/{filmId}</i></td>
    <td>No body</td>
    <td>The delete movie</td>
  </tr>
</table>


  ## Endpoints

  endpoints relacionados a um CRUD de **Estúdios**

  <table>

  <tr>
    <th>Request name</th>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Request body</th>
    <th>Returns</th>
  </tr>


  <tr>
    <td>RegisterStudio</td>
    <td>POST</td>
    <td><i>/studio</i></td>
    <td>JSON with the properties <br /> <code>title: string, headquarters: string, unique: true | false, studioid: number </td>
    <td>The register studio</td>
  </tr>

  <tr>
    <td>ListStudios</td>
    <td>GET</td>
    <td><i>/studio</i></td>
    <td>No body</td>
    <td>All studios</td>
  </tr>

   <tr>
    <td>UpdateStudio</td>
    <td>PUT</td>
    <td><i>/studio/{studioId}</i></td>
    <td>JSON with the properties <br /> <code>title: string, headquarters: string, unique: true | false, studioid: number </code></td>
    <td>The update studio </td>
  </tr>

  <tr>
    <td>DeleteStudio</td>
    <td>DELETE</td>
    <td><i>/studio/{studioId}</i></td>
    <td>No body</td>
    <td>The delete studio</td>
  </tr>
</table>

 ## Tecnologias utilizadas

- Typescript
- Node.js
- Mongoose
- MongoDb
- Express.js.


##  Requisitos

Requisitos Funcionais 
- [x] O usuário deve poder registar um filme;
- [x] O usuário deve poder obter uma lista com os filmes registrados;
- [x] O usuário deve poder listar todos os filmes feitos por um estúdio;
- [x] O usuário deve poder atualizar os filmes registrados anteriormente;
- [x] O usuário deve poder deletar os filmes;
- [x] O usuário deve poder registar um estúdio;
- [x] O usuário deve poder obter uma lista com os estúdios registrados;
- [x] O usuário deve poder atualizar os estúdios registrados anteriormente;
- [x] O usuário deve poder deletar os estúdios;
