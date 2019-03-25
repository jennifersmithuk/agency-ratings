import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import serializeForm from 'form-serialize';
import { Button, Icon, Modal, Form } from 'semantic-ui-react'

const agencyRegionOptions = [
  { key: 'ab', value: 'ab', text: 'Aberdeenshire' },
  { key: 'an', value: 'an', text: 'Anglesey' },
  { key: 'ag', value: 'ag', text: 'Angus' },
  { key: 'ar', value: 'ar', text: 'Argyll' },
  { key: 'ay', value: 'ay', text: 'Ayrshire' },
  { key: 'bn', value: 'bn', text: 'Banffshire' },
  { key: 'be', value: 'be', text: 'Bedfordshire' },
  { key: 'bi', value: 'bi', text: 'Berwickshire' },
  { key: 'br', value: 'br', text: 'Breconshire' },
  { key: 'bk', value: 'bk', text: 'Buckinghamshire' },
  { key: 'bu', value: 'bu', text: 'Bute' },
  { key: 'cn', value: 'cn', text: 'Caernarvonshire' },
  { key: 'ct', value: 'ct', text: 'Caithness' },
  { key: 'ca', value: 'ca', text: 'Cambridgeshire' },
  { key: 'cg', value: 'cg', text: 'Cardiganshire'},
  { key: 'cr', value: 'cr', text: 'Carmarthenshire'},
  { key: 'ch', value: 'ch', text: 'Cheshire' },
  { key: 'cl', value: 'cl', text: 'Clackmannanshire'},
  { key: 'cn', value: 'cn', text: 'Cornwall and Isles of Scilly' },
  { key: 'ant', value: 'any', text: 'County Antrim' },
  { key: 'arm', value: 'arm', text: 'County Armagh' },
  { key: 'dow', value: 'dow', text: 'County Down' },
  { key: 'fer', value: 'fer', text: 'County Fermanagh' },
  { key: 'der', value: 'der', text: 'County Londonderry' },
  { key: 'tyr', value: 'tyr', text: 'County Tyrone' },
  { key: 'cu', value: 'cu', text: 'Cumbria'},
  { key: 'di', value: 'di', text: 'Denbighshire'},
  { key: 'dv', value: 'dv', text: 'Devon'},
  { key: 'db', value: 'db', text: 'Derbyshire'},
  { key: 'do', value: 'do', text: 'Dorset'},
  { key: 'da', value: 'da', text: 'Dumbartonshire' },
  { key: 'du', value: 'du', text: 'Dumfriesshire' },
  { key: 'du', value: 'du', text: 'Durham' },
  { key: 'el', value: 'el', text: 'East Lothian'},
  { key: 'es', value: 'es', text: 'East Sussex'},
  { key: 'fi', value: 'fi', text: 'Fife'},
  { key: 'fl', value: 'fl', text: 'Flintshire'},
  { key: 'gm', value: 'gm', text: 'Glamorgan'},
  { key: 'gl', value: 'gl', text: 'Gloucestershire'},
  { key: 'gr', value: 'gr', text: 'Greater London'},
  { key: 'gm', value: 'gm', text: 'Greater Manchester'},
  { key: 'hm', value: 'hm', text: 'Hampshire'},
  { key: 'he', value: 'he', text: 'Herefordshire'},
  { key: 'ht', value: 'ht', text: 'Hertfordshire'},
  { key: 'iv', value: 'iv', text: 'Inverness'},
  { key: 'is', value: 'is', text: 'Isle of Wight'},
  { key: 'kn', value: 'kn', text: 'Kent'},
  { key: 'ke', value: 'ke', text: 'Kincardineshire'},
  { key: 'kp', value: 'kp', text: 'Kinross-shire'},
  { key: 'kc', value: 'kc', text: 'Kirkcudbrightshire'},
  { key: 'la', value: 'la', text: 'Lanarkshire'},
  { key: 'lc', value: 'lc', text: 'Lancashire'},
  { key: 'le', value: 'le', text: 'Leicestershire'},
  { key: 'ln', value: 'ln', text: 'Lincolnshire'},
  { key: 'ld', value: 'ld', text: 'London'},
  { key: 'me', value: 'me', text: 'Merionethshire'},
  { key: 'mr', value: 'mr', text: 'Merseyside'},
  { key: 'mi', value: 'mi', text: 'Midlothian'},
  { key: 'mo', value: 'mo', text: 'Monmouthshire'},
  { key: 'mg', value: 'mg', text: 'Montgomeryshire'},
  { key: 'my', value: 'my', text: 'Moray'},
  { key: 'nn', value: 'nn', text: 'Nairnshire'},
  { key: 'nr', value: 'nr', text: 'Norfolk'},
  { key: 'ny', value: 'ny', text: 'North Yorkshire'},
  { key: 'nh', value: 'nh', text: 'Northamptonshire'},
  { key: 'nu', value: 'nu', text: 'Northumberland'},
  { key: 'no', value: 'no', text: 'Nottinghamshire'},
  { key: 'or', value: 'or', text: 'Orkney'},
  { key: 'ox', value: 'ox', text: 'Oxfordshire'},
  { key: 'pb', value: 'pb', text: 'Peebleshire'},
  { key: 'pm', value: 'pm', text: 'Pembrokeshire'},
  { key: 'pt', value: 'pt', text: 'Perthshire'},
  { key: 'rd', value: 'rd', text: 'Radnorshire'},
  { key: 'rn', value: 'rn', text: 'Renfrewshire'},
  { key: 'rs', value: 'rs', text: 'Ross & Cromarty'},
  { key: 'rx', value: 'rx', text: 'Roxburghshire'},
  { key: 'sl', value: 'sl', text: 'Selkirkshire'},
  { key: 'se', value: 'se', text: 'Shetland'},
  { key: 'sh', value: 'sh', text: 'Shropshire'},
  { key: 'so', value: 'so', text: 'Somerset'},
  { key: 'sy', value: 'sy', text: 'South Yorkshire'},
  { key: 'st', value: 'st', text: 'Staffordshire'},
  { key: 'sn', value: 'sn', text: 'Stirlingshire'},
  { key: 'su', value: 'su', text: 'Suffolk'},
  { key: 'su', value: 'su', text: 'Surrey'},
  { key: 'sr', value: 'sr', text: 'Sutherland'},
  { key: 'tw', value: 'tw', text: 'Tyne and Wear'},
  { key: 'wr', value: 'wr', text: 'Warwickshire'},
  { key: 'we', value: 'we', text: 'West Lothian'},
  { key: 'wm', value: 'wm', text: 'West Midlands'},
  { key: 'ws', value: 'ws', text: 'West Sussex'},
  { key: 'wy', value: 'wy', text: 'West Yorkshire'},
  { key: 'wg', value: 'wg', text: 'Wigtownshire'},
  { key: 'wl', value: 'wl', text: 'Wiltshire'},
  { key: 'wo', value: 'wo', text: 'Worcestershire'}
];


class AgencyModal extends Component {
  state = { 
    open: false,
    AgencyName: '',
    AgencyLocationTown: '',
    AgencyLocationRegion: '',
    AgencyEmail: ''
   }

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
          <Button 
            className="add-agency-button"
            >
            Submit agency
          </Button>
        }
      >
        <Modal.Header>Thank you</Modal.Header>
        <Modal.Content>
          <p><Icon name="thumbs up" color="olive" size="big"/>Thank you for submitting a request to add an agency.</p>
          <p><Icon name="mail" color="teal" size="big"/>We'll verify these details and let you know by email if we've added them.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}


const AddAgencyModal = () => (
  <Modal size='small' trigger={<Button className="ratings-form-add-agency-button" >
  Add Agency</Button>}>
    <Modal.Header >
    Add Agency</Modal.Header>
    <Modal.Content>
    <Modal.Description className='add-agency-modal-description'>
        <p>Please be as accurate as you can.<br/>
        This will save time and make sure we can include your request in the database.<br/>
        <Icon name='attention' />It takes 3-5 working days to review requests.</p>
      </Modal.Description>
    <Form>
      <Form.Field>
      <Form.Input required label='Agency Name' placeholder='Agency name'/>
      </Form.Field>
      <Form.Field>
      <Form.Input required label='Agency Town' placeholder='Town'/>
      </Form.Field>
      <Form.Dropdown
      required
      label='Agency Region'
      placeholder='Select County'
      fluid

      search
      selection
      clearable
      options={agencyRegionOptions}
      />
      <Form.Field>
      <Form.Input required label='Agency Email' placeholder='agency@acmeagency.com' />
      </Form.Field>
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <AgencyModal />
    </Modal.Actions>
  </Modal>
)

export default AddAgencyModal;