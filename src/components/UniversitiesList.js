import React, { Component } from 'react';
import axios from 'axios';

class UniversitiesList extends Component {

  constructor(props){
    super(props);
    this.state = {
      universities : [] /*almacenar los datos a consumir en api rails*/
    };
  }

  /*enviar la peticion http*/
    componentWillMount(){
      axios({
          method: 'get',
          url:'https://unipastas-back.herokuapp.com/universities',
          headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
            Accept: "application/json", // Para JSON
            "Content-Type": "application/json", // Para JSON
           }),
        })

        .then(response => {

          let universities  = response.data.slice();

          this.setState({
            universities: universities
          })
        })
        .catch(function (error) {
            console.log(error);
        });
    }


  render() {
    const universitiesList = this.state.universities.map((university)=>{

      console.log(university)

      return (<p>
                id = {university.id} name = {university.name} city = {university.city} department = {university.department}
             </p>)
           })

    return (
        <div>
            {universitiesList}
        </div>
    );
  }
}
export default UniversitiesList;
