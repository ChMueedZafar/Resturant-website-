import React from 'react'

const DebitCard = () => {
  return (
      <div className="cardGroup">
        <img src="https://pluspng.com/img-png/visa-logo-png-visa-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png" alt="debitcard" className='card_Logo' />
        <img src="https://www.postbank.de/dam/postbank/bilder/services/privatkunden/karten-services/postbank-card/postbank-card-debitkarte-v-pay-emv-chip.png" alt="debitcard" className='card_Chip' />
        <div className="card_number">5590 4902 6056 2093</div>
        <div className="card_name">Abdul Mueed Zafar</div>
        <div className="card_from">10/28</div>
        <div className="card_ring"></div>
      </div>

  )
}

export default DebitCard;