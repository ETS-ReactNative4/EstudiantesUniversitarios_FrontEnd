import React, { Component } from 'react';
import axios from 'axios';

class Majors extends Component {

  constructor(props){
    super(props);
    this.state = {
      majors : [] /*almacenar los datos a consumir en api rails*/
    };
  }

  /*enviar la peticion http*/
    componentWillMount(){
      axios({
          method: 'get',
          url:'https://unipastas-back.herokuapp.com/majors',
          headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
            Accept: "application/json", // Para JSON
            "Content-Type": "application/json", // Para JSON
           }),
        })

        .then(response => {

          let majors  = response.data.slice();

          this.setState({
            majors: majors
          })
        })
        .catch(function (error) {
            console.log(error);
        });
    }


  render() {
    const majorsList = this.state.majors.map((major)=>{

    return (<p>
                id = {major.id} name = {major.name}
             </p>)
           })

    return (
        <div>
            {majorsList}
        </div>
    );
  }
}
export default Majors;
