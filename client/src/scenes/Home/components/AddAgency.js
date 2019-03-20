import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import { Button, Icon } from 'semantic-ui-react';


class AddAgency extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if (this.props.onAddAgency)
      this.props.onAddAgency(values)
  }


  render() {
    return (

      <div>
        <form onSubmit={this.handleSubmit} className='add-agency-form'>
          <div className='add-agency-details'>
            <input type='text' name='Agency name' placeholder='Name'/>
            <input type='text' name='Town' placeholder='Town'/>
            <input type='text' name='Region' placeholder='Region'/>
            <Button
              tabIndex={0}
              as='a' >
              aria-label="Add Agency">
              <Icon name='add' size='small' />
            </Button>
          </div>
        </form>
      </div>

    );
}
}

export default AddAgency;
