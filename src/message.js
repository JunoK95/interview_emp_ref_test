import React from 'react';

export const Message = props => <div className="text-center">
    <h3 className="message-header">{props.header ? props.header : <h3 className="message-header">Thank You</h3>}</h3>
    <div class="message-body"> {props.text ? props.text : <div class="message-body">We will reply to your message in next 24h. Have a nice day! ;-)</div>} </div>
</div>
