import { useState } from 'react'
import './styles.css'
// import logo from './logo.svg'
import Axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/preinscriptions/'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const toggleModal = () => setIsOpen(!isOpen)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Axios.post(baseURL, { name, email })
      setName('')
      setEmail('')
      toggleModal()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <>
      <section className='page modal-1-page'>
        <div
          className={`modal-1-overlay ${isOpen ? 'open' : ''}`}
          onClick={toggleModal}
        >
          <div className='modal-1-modal' onClick={(e) => e.stopPropagation()}>
            <header>
              <h2>Preinscription</h2>
              <h3>Solo ingrese su correo</h3>
            </header>
            <form onSubmit={handleSubmit}>
              <div className='textbox'>
                <input
                  type='text'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='textbox'>
                <input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                className='signup-button'
                type='submit'
                style={{ backgroundColor: '#161022' }}
              >
                <p className='text-white font-bold text-2xl'>ENVIAR</p>
              </button>
            </form>
            <p></p>
          </div>
        </div>
      </section>
    </>
  )
}
export default Modal
