import React from 'react';
import { object,func } from 'prop-types';

class ContactForm extends React.Component{

    static defaultProps = {
        data:{
            name:'',
            email:'',
            option:'',
            select: '',
            message:'',
            terms:false
        }
    }

    static propTypes = {
        onChange: func.isRequired,
        onSubmit: func.isRequired,
        data: object.isRequired
    }

    /**
     * When form is submitted forward contact data to parent
     * @param {event} DOMEvent
     */

    handleSubmit(event){
        event.preventDefault();

        this.props.onSubmit(this.props.data)
    }

    fieldChange(event){
        let target = event.target;
        let value = target.type ==='checkbox' ? target.checked : target.value;
    }

    isSelected(key, option){
        return this.props.data[key] === option
    }

    render(){
        let { data } = this.props;
        console.log('data', data)

        const options = [
            {id:1, label:'I have question about my membership'},
            {id:2, label:'I have technical question'},
            {id:3, label:'I would like to change membership'},
            {id:4, label:'Other question'},
        ]

        const optionDropdown = options.map( option => 
            <option key={option.id} value={option.id}>{option.label}</option>
        )

        return <form onSubmit={(e) => {
            e.preventDefault()
            this.props.onSubmit(data)
        }}>

        <h3>Contact Form</h3>

        <div className="form-group">
            <label className="form-label">Your Name:</label>
            <input name="name" className="form-control" value={data.name} onChange={this.props.onChange} />
        </div>

        <div className="form-group">
            <label className="form-label">Your Best Email:</label>
            <input name="email" className="form-control" value={data.email} onChange={this.props.onChange} />
        </div>

        <label className="form-label">Select your membership option:</label>
        <div className="form-group row">
            <label className="form-label col-xs-4">
            <input type="radio" name="option" value="A" onChange={this.props.onChange} checked={data.option === 'A'} /> Option A</label>
            <label className="form-label col-xs-4">
            <input type="radio" name="option" value="B" onChange={this.props.onChange} checked={data.option === 'B'} /> Option B</label>
            <label className="form-label col-xs-4">
            <input type="radio" name="option" value="C" onChange={this.props.onChange} checked={data.option === 'C'} /> Option C</label>
        </div>

        <hr/>

        <div className="form-group">
            <label className="form-label">What can we help you with:</label>
            <select  className="form-control" name="select" value={data.select} onChange={this.props.onChange}>
                {optionDropdown}
            </select>
        </div>

        <div className="form-group">
            <label className="form-label">Message:</label>
            <textarea name="message" rows="10" placeholder="Please type your question here"  className="form-control" onChange={this.props.onChange} />
        </div>

        <div className="form-group">
            <label className="form-label"> <input type="checkbox" name="terms" value={data.terms} onChange={this.props.onChange} /> I agree to terms and conditions </label>
        </div>
            <input type="submit" value="Send" className="contactform-submit" />
        </form>
    }
}


export default ContactForm