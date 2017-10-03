import React, {Component, PropTypes} from 'react';

// const AppContainer = (props) => (
//   <div>
//     <h1>Hello, User!</h1>
//   </div>
// );
//
// export default AppContainer;

const initialState = {
  filter: '',
  apiReturn: '',
};

export default class User extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  handleFilterUpdate = (filter) => {
    this.setState({filter})
  };

  getData = (username) => {
    fetch(`https://pubgtracker.com/api/profile/pc/${username}`, {
      method: 'GET',
      headers: new Headers({
        accepts: "application/json",
        'TRN-Api-Key':'e43d28f4-bcb4-4046-a7b8-e8ae06591d16',
      }),
    }).then(response => response.json()).then(result => {
      this.setState({ apiReturn: result });
      // console.log("Got result");
      // console.log(result);
    });
  };

  componentWillMount() {
    this.getData(this.props.params.username);
  }

  render() {
    console.log("Test Log");
    console.log(this.state.apiReturn);
    return (
      <div>
        <h1>Data for your call:</h1>
        {
          Object.keys(this.state.apiReturn).map(key => (
            <p key={key}>{key} : {this.state.apiReturn[key]}</p>
          ))
        }
      </div>
    )
  }
}

User.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string,
  }),
};
