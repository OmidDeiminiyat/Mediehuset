import style from './Footer.module.scss';
import logo1 from './../../assets/Hancock-logo.png'
export const Footer = () => {

    return(
        <>
        <footer className={style.footer}>
            <section>
                <h1>Tilmed nyheldsbrew</h1>
                <p>Få denne seneste nyheder sendt til din indbakke</p>
                <input type="email" name="email" id="email" />
                <img src={logo1} alt="" />
            </section>
        </footer>
        
        </>
    )
}