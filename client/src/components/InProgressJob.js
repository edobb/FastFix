import React from 'react';
import AvailableJob from './AvailableJob';
import ProviderInfo from './ProviderInfo';
import UserInfo from './UserInfo';
import ChatSendForm from './ChatSendForm';
//import ChatRecvForm from './ChatRecvForm';
import chat from '../chat';
var fb = require('../fb');

const fakeInProgressJob = {
        _id: 1, title: "Repair garage door and opener.", zipCode: "91915", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder."
    }

class InProgressJob extends React.Component{

    constructor(props){
        super(props);
        this.sendChat = this.sendChat.bind(this);
        this.displayResponse = this.displayResponse.bind(this);
    };

    state = {
        jobData : fakeInProgressJob,
        providerData: {},
        chatSendMsg: "",
        chatRecvMsg: [],
        chatDisplay: false
    };

    componentDidMount() {

        let folder = chat.getRef();

        //  receive latest message from Firebase
        fb.ref(folder).on("child_added", function(childSnapshot, prevChildKey) {

            console.log("Msg from Firebase");
            console.log(childSnapshot.val());

            this.processChat(childSnapshot.val().sender, childSnapshot.val().msg);
        }.bind(this));
    };

    _toggleUserChat = event => {
        this.setState({chatDisplay: !this.state.chatDisplay});
    };

    processChat(sender, msg) {

        if (sender === "user")
        {
            if (this.props.isUser === false)
            {
              this.displayResponse(msg);
              console.log("Sending msg to contractor: ");
            }
        }
        else 
        {
            if (this.props.isUser === true)
            {
              this.displayResponse(msg);
              console.log("Sending msg to user: ");
            }
        }
    } 


    displayResponse(msg) {
        let content = this.state.chatRecvMsg;
        content[content.length] = msg;
        this.setState({ chatRecvMsg: content});
        let response = document.getElementById('response');
        // response.scrollTop = response.scrollHeight;
    }


    sendChat(msg) {
        var sender;
        if (this.props.isUser === true)
            sender = "user";
        else
            sender = "contractor";

        this.state.chatInit = true;

        chat.post(sender, msg);
        this.setState({ chatSendMsg: ""});
    }

 

    render() {
        const props = this.props;
        const isUserPage = props.isUser;

        return(
            <div>
                <h2>You Currently Have The Following Job In Progress</h2>
                <div className="panel panel-success" data-value={this.state.jobData._id}>   
                    <div className="panel-heading">
                        <h3 className="panel-title"><span className="glyphicon glyphicon-asterisk" aria-hidden="true"></span> {this.state.jobData._id} | {this.state.jobData.title} - {this.state.jobData.zipCode}</h3>
                    </div>
                    <div className="panel-body panel-success">
                        {this.state.jobData.description}<br />
                    </div>
                    <div className="panel-body">
                    {props.isUser ? <UserInfo onClick={this._toggleUserChat} toggleChat={this._toggleUserChat.bind(this)}/> : <ProviderInfo onClick={this._openProviderChat}  />}
                    </div>
                </div>
                <hr />
                {this.state.chatDisplay ? (
                <div className="chat-widget">
                    <div>
                        <p>Chat</p>
                        <textarea readOnly id = "response" rows="4" cols="60"
                            value={this.state.chatRecvMsg.join("\n")}/>         
                    </div>
                    <hr />
                    <div>
                        <ChatSendForm sendChat={this.sendChat} />
                    </div>
                    <hr />
                </div>
                ): <div></div>}
            </div>
        )
    }
};

export default InProgressJob;
