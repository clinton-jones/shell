import React from 'react'

import metamaskLogo from '../../assets/metamask.svg'

import Loader from '../Loader'
import Modal from '../Modal'
import ModalActions from '../ModalActions'
import ModalIcon from '../ModalIcon'
import ModalTitle from '../ModalTitle'

const ModalConfirmMetamask = () => (
  <Modal>
    <ModalIcon>
      <img src={metamaskLogo} style={{ height: 96 }} />
    </ModalIcon>
    <ModalTitle>Confirming with MetaMask</ModalTitle>
    <ModalActions>
      <div style={{ width: '100%' }}>
      <Loader />
      </div>
    </ModalActions>
  </Modal>
)

export default ModalConfirmMetamask