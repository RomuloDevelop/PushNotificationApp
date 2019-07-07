import React, {Component} from 'react';
import {Modal} from 'react-native';
import {Button, Icon} from 'native-base';
import {colors} from '../styles';

function CloseModalButton(props){
    return(
        <Button style={{alignSelf:'flex-end', margin:10, borderColor:colors.blackColor}} bordered onPress={props.onClose}>
          <Icon type="FontAwesome" name='times' style={{color:colors.blackColor}}/>
        </Button>
    )
}

function withModal(WrappedComponent) {
  // ...and returns another component...
  return class extends Component {
        constructor(props){
            super(props);
            this.Open = this.Open.bind(this);
            this.Close = this.Close.bind(this);
            this.state = {
                show:false
            }
        }

        Open() {this.setState({show:true});}

        Close() {this.setState({show:false});}

        

        render() {
            const ModalContainer = (props) => (
                <Modal
                    animationType={'slide'}
                    visible={props.show}>
                    <CloseModalButton onClose={props.onClose?props.onClose:this.Close}/>
                    {props.children}
                </Modal>
            );
            return (
                <ModalContainer show={this.state.show} onClose={this.props.onClose}>
                    <WrappedComponent {...this.props} />
                </ModalContainer>
            );
        }
    }
}

export default withModal;