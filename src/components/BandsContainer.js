import React, { Component } from 'react'
import { connect } from 'react-redux'

import BandInput from './BandInput';
import Bands from './Bands'

class BandsContainer extends Component {
    render() {
        return (
            <div>
                <BandInput addBand={this.props.addBand}/>
                <Bands bands={this.props.bands}/>
            </div>
        )
    }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
