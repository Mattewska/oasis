import './AboutMe.css';

function AboutMe() {
    return (
        <>
            <main className='content'>
                <section className='aboutme'>
                    <div className="textContainer">
                        <h2>Vision</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, excepturi nostrum facere voluptate facilis quas quisquam odio quam eaque necessitatibus impedit amet molestiae provident neque consequatur harum commodi non? Sed!</p>
                    </div>
                    <div className="textContainer">
                        <h2>Mision</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis porro a corporis quia consectetur quae asperiores rerum! Sit architecto necessitatibus animi corrupti error deserunt molestiae repellat. Quasi, inventore? Similique!</p>
                    </div>
                    <div className="textContainer">
                        <h2>Quienes Somos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis porro a corporis quia consectetur quae asperiores rerum! Sit architecto necessitatibus animi corrupti error deserunt molestiae repellat. Quasi, inventore? Similique!</p>
                    </div>
                </section>
                <section className='contact'>
                    

                    <div className='textContainer'>
                        <h2>Contacto</h2>
                        <p>Celular: 3xx xxx xxxx</p>
                        <p>Correo: xxx@xx.com</p>
                        <p>Direccion: direccion 1</p>
                    </div>

                    <div className="textContainer">
                        <h2>Envianos un correo</h2>
                        <form className='contactForm' method="post">
                            <div>
                                <label htmlFor="asunto">asunto</label>
                                <input type="text" name="asunto" id="asunto" />
                            </div>
                            <div>
                                <label htmlFor="cuerpo">mensaje</label>
                                <textarea name="cuerpo" id='cuerpo' cols={30} rows={7}/>
                            </div>
                        </form>
                    </div>

                </section>
            </main>
        </>
    )
}
export default AboutMe