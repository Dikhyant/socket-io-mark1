import React from 'react';
import io from "socket.io-client";
import SendMessage from "./components/SendMessage";
import ShowMessages from "./components/ShowMessages";

const socket = io.connect("http://192.168.43.130:4000/");
const chatSignal = "chat";

class App extends React.Component{
  state = {
    messages: []
  }

  componentDidMount(){
    // console.log(socket);
    socket.on(chatSignal, this.receiveMessage);
    
  }

  receiveMessage = (data) =>{
    console.log(data);
    this.setState({
      messages: [...this.state.messages , {id: data.id , text: data.text , key: data.key}]
    });
  }

  sendMessage = (data) =>{
    console.log(data);
    this.setState({
      messages: [...this.state.messages , {id: data.id , text: data.text , key: data.key}]
    });
    socket.emit(chatSignal,data);
  }

  render(){
    // console.log(socket);
    return (
      <div className="App">
        <ShowMessages messages={this.state.messages} />
        <SendMessage id={socket.id} sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
