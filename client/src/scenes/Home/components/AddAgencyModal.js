import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import serializeForm from 'form-serialize';
import { Button, Icon, Modal, Form } from 'semantic-ui-react'


class AgencyModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state


/*
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if (this.props.onAddAgency)
      this.props.onAddAgency(values)
  }
  */

    return (

    /*
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
    );
}
}
*/

<Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
          <Button color="teal">
            Submit agency
          </Button>
        }
      >
        <Modal.Header>Thank you</Modal.Header>
        <Modal.Content>
          <p><Icon name="thumbs up" color="olive" size="big"/>Thank you for submitting a request to add an agency.</p>
          <p><Icon name="mail" color="teal" size="big"/>We'll verify these details and let you know if we've added them.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}

const AddAgencyModal = () => (
  <Modal trigger={<Button className="ratings-form-add-button" >
  Add Agency</Button>}>
    <Modal.Header>Add agency</Modal.Header>
    <Modal.Content image>
    <Form>
      <Form.Field required>
      <label>Agency name</label>
      <input placeholder='Agency name' />
      </Form.Field>
      <Form.Field>
      <label>Town</label>
      <input placeholder='Town' />
      </Form.Field>
      <Form.Field required>
      <label>Region [Dropdown]</label>
      <input placeholder='Region' />
      </Form.Field>
      </Form>
      <Modal.Description>
        <p>The more detail you can give, the more likely we will be able to add your request to our database.</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <AgencyModal />
    </Modal.Actions>
  </Modal>
)

export default AddAgencyModal;