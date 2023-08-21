import './Footer.css'

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src='/img/facebook-fill.png' alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src='/img/twitter-fill.png' alt='Twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src='/img/instagram-fill.png' alt='Instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Carlos Acosta</strong>
    </footer>
}

export default Footer