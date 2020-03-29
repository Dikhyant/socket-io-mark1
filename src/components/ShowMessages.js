import React from "react";

class ShowMessages extends React.Component{
    render(){
        const messages = this.props.messages.map(message=>{
            // console.log(message)
            return(
                <div key={message.key}>
                    {message.text}
                </div>
            )
        })
        return(
            <div>
                {messages}
            </div>
        )
    }
}

export default ShowMessages;