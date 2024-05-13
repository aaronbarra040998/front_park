export default function Footer() {
  return (
    <footer className='modal-1-footer'>
          <div className='container'>
            <article>
              <h2>Preregistrate de manera rapida y gratis.</h2>
              <button
                className='signup-button'
                type='button'
                onClick={toggleModal}
                style={{ backgroundColor: '#2cd6bb' }}
              >
                <p>Preregistro free</p>
              </button>
            </article>
            <section className='top'>
              <img className='logotipo' src={logo} alt='Logo' />
              <ul>
                <li>
                  <h3>Resources</h3>
                  <a>Usage</a>
                  <a>Docs</a>
                  <a>Support</a>
                  <a>Hardware</a>
                </li>
                <li>
                  <h3>Pricing</h3>
                  <a>Overview</a>
                  <a>Flexible Data</a>
                  <a>High Volume</a>
                  <a>Enterprise</a>
                </li>
                <li>
                  <h3>Developers</h3>
                  <a>Forum</a>
                  <a>Projects</a>
                  <a>Open Source</a>
                  <a>GitHub</a>
                </li>
                <li>
                  <h3>Company</h3>
                  <a>About Us</a>
                  <a>Blog</a>
                  <a>Partnerships</a>
                  <a>Careers</a>
                </li>
              </ul>
            </section>
          </div>
        </footer>
  )
}
