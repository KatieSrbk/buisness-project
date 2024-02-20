import { useState } from 'react'
import './App.css'
import { ModalWindow } from './components/ModalWindow'
// import './App2222.css'

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true)
  }

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false)
  }
 
  return (
    <div className='wrapper'>
      {isQuoteModalOpen && <ModalWindow closeQuoteModal={closeQuoteModal} />}
      <header className='header'>
        <div className='header__container _container'>
          <a href='' className='header__logo'>
            Relvise
          </a>
          <nav className='header__menu menu'>
            <ul className='menu__list'>
              <li className='menu__item'>
                <a href='' className='menu__link'>
                  Home
                </a>
              </li>
              <li className='menu__item'>
                <a href='' className='menu__link'>
                  Product
                </a>
              </li>
              <li className='menu__item'>
                <a href='' className='menu__link'>
                  Pricing
                </a>
              </li>
              <li className='menu__item'>
                <a href='' className='menu__link'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className='main' /* className='page' */>
        <div className='page__main-block main-block'>
          <div className='main-block__container _container'>
            <div className='main-block__body'>
              <h1 className='main-block__title'>
                Finasce and Consultancy Solution
              </h1>
              <div className='main-block__text'>
                Lorem ipsum dolor sit amet, Iure maxime, hic laudantium
                quibusdam accusantium totam!
              </div>
              <div className='main-block__buttons'>
                <button
                  onClick={openQuoteModal}
                  className='main-block__button main-block__button_orange'
                >
                  Get Quote Now
                  </button>
                <a
                  href=''
                  className='main-block__button main-block__button_border'
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className='main-block__image _ibg'>
            <img src='./cover2.jpg' alt='cover'></img>
          </div>
        </div>
        <section className='page__services services'>
          <div className='services__container _container'>
            <div className='services_body'>
              <div className='services_column'>
                <div className='services_item item-service'>
                  <div className='item-service__icon'>
                    <img
                      src='./services/01.svg'
                      alt='Environmental Consulting'
                    ></img>
                  </div>
                  <h3 className='item-service__title'>
                    Environmental Consulting
                  </h3>
                  <div className='item-service__text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nobis.
                  </div>
                </div>
              </div>
              <div className='services_column'>
                <div className='services_item item-service'>
                  <div className='item-service__icon'>
                    <img
                      src='./services/02.svg'
                      alt='Finance and consultancy'
                    ></img>
                  </div>
                  <h3 className='item-service__title'>
                    Finance and consultancy
                  </h3>
                  <div className='item-service__text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nobis.
                  </div>
                </div>
              </div>
              <div className='services_column'>
                <div className='services_item item-service item-service_green'>
                  <div className='item-service__icon'>
                    <img
                      src='./services/03.svg'
                      alt='Financial Services Consulting'
                    ></img>
                  </div>
                  <h3 className='item-service__title'>
                    Financial Services Consulting
                  </h3>
                  <div className='item-service__text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='page__advantages advantages'>
          <div className='advantages__container _container'>
            <div className='advantages__header header-block'>
              <h2 className='header-block__title'>
                Designing Better Experience
              </h2>
              <div className='header-block__sub-title'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur, veritatis in.
              </div>
            </div>
            <div className='advantages__body'>
              <div className='advantages__column'>
                <div className='advantages__item'>
                  <div className='advantages__icon'>
                    <img src='./advantages/01.svg' alt='Consumer Products'></img>
                  </div>
                  <div className='advantages__value'>643 +</div>
                  <div className='advantages__text'>Consumer Products</div>
                </div>
              </div>
              <div className='advantages__column'>
                <div className='advantages__item'>
                  <div className='advantages__icon'>
                    <img src='./advantages/02.svg' alt='Financial Services'></img>
                  </div>
                  <div className='advantages__value'>125 +</div>
                  <div className='advantages__text'>Financial Services</div>
                </div>
              </div>
              <div className='advantages__column'>
                <div className='advantages__item'>
                  <div className='advantages__icon'>
                    <img src='./advantages/03.svg' alt='Environmental'></img>
                  </div>
                  <div className='advantages__value'>67% +</div>
                  <div className='advantages__text'>Environmental</div>
                </div>
              </div>
              <div className='advantages__column'>
                <div className='advantages__item'>
                  <div className='advantages__icon'>
                    <img src='./advantages/04.svg' alt='Business & Finance'></img>
                  </div>
                  <div className='advantages__value'>584 +</div>
                  <div className='advantages__text'>Business & Finance</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer'>Footer</footer>
    </div>
  )
}

export default App
