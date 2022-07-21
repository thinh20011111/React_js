import React from 'react';

//Bật đèn
function OffButton(props) {
  return (
    <button className='button' onClick={props.onClick}>
      Tắt đèn
    </button>
  );
}

function OnButton(props) {
  return (
    <button className='button' onClick={props.onClick}>
      Bật đèn
    </button>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: false});
    document.getElementById('root').style.backgroundColor = "white"
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: true});
    document.getElementById('root').style.backgroundColor = "black"
  }

  componentDidMount() {
    this.timeID = setInterval(
      () => this.handleLoginClick(), 1000
    );

    this.timeID = setInterval(
      () => this.handleLogoutClick(), 2000
    );
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <OnButton onClick={this.handleLoginClick} />;
    } else {
      button = <OffButton onClick={this.handleLogoutClick} />;
    }

    return (
      <div className='button'>    
        {button}
      </div>
    );
  }
}

export default App