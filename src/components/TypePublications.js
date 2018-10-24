import React, { Component } from 'react';
import axios from 'axios';

class TypePublications extends Component {

  constructor(props){
    super(props);
    this.state = {
      type_publications : [] /*almacenar los datos a consumir en api rails*/
    };
  }

  /*enviar la peticion http*/
    componentWillMount(){
      axios({
          method: 'get',
          url:'https://unipastas-back.herokuapp.com/type_publications',
          headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
            Accept: "application/json", // Para JSON
            "Content-Type": "application/json", // Para JSON
           }),
        })

        .then(response => {

          let type_publications  = response.data.slice();

          this.setState({
            type_publications: type_publications
          })
        })
        .catch(function (error) {
            console.log(error);
        });
    }


  render() {
    const typePublications = this.state.type_publications.map((type)=>{

    return (<p>
                id = {type.id} name = {type.name}
             </p>)
           })

    return (
        <div>
            {typePublications}
        </div>
    );
  }
}
export default TypePublications;
