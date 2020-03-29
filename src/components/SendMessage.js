import React from "react";

class SendMessage extends React.Component{
    state = {
        id: "Bruce",
        text: "",
        key: Math.random()
    }

    componentDidMount(){
        this.setState({
            key: Math.random()
        })
    }

    handleChange = (e) =>{
        this.setState({
            text: e.target.value
        });
    }
     handleSubmit = (e) =>{
         e.preventDefault();
         this.props.sendMessage(this.state);
     }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div><input onChange={this.handleChange}></input></div>
                    <div><button>Send</button></div>
                </form>
            </div>
        )
    }
}

export default SendMessage;