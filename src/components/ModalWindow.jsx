export const ModalWindow = ({closeQuoteModal}) => {
  return (
    <div className='modal-container'>
      <div className='modal-body'>
        <p className='modal-body__title'>Get Quote</p>
        <p className='modal-body__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          maxime qui, voluptates recusandae eos sapiente?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Fugiat neque quasi numquam
          perspiciatis? Voluptas enim totam vel laboriosam? Sunt voluptates quod
          aperiam nisi doloribus distinctio totam rerum, quo hic suscipit.
        </p>
        <div className="modal-body__buttons">
            <button onClick={closeQuoteModal}>Cancel</button>
            <button>OK</button>
        </div>
      </div>
    </div>
  )
}
