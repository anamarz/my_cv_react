import style from './styles/info_block.module.css';
import facebook from './images/facebook.png';
import github from './images/github.png';
import instagram from './images/instagram.png';

const InfoBlock = () => {
    return (
        <div className={style.cv_info}>
            <div className={style.cv_info_name_wrapper}>
                <h2 className={style.cv_info_name}>
                    Anna Martsinkevich
                </h2>
            </div>
            <div className={style.cv_info_block}>
                <h3 className={style.cv_info_headline}>About myself</h3>
                <p>Hello, my name is Anna and I'm a novice front-end developer.
                    Being trully passionated about what I do,
                    I have got the power to manege everything
                    connecting my specialization. I am interested in
                    inovational approach to the work I perform.</p>
            </div>
            <div className={style.cv_info_block}>
                <h3 className={style.cv_info_headline}>My socials</h3>
                <a href='https://www.google.com'><img
                    className={style.cv_info_icon}
                    src={facebook}
                    alt='facebook logo' />
                    Anna Martsinkevich</a>
                <a href='https://github.com/anamarz'><img
                    className={style.cv_info_icon}
                    src={github}
                    alt='github logo' />
                    anamarz</a>
                <a href='https://www.instagram.com/'><img
                    className={style.cv_info_icon}
                    src={instagram}
                    alt='instagram logo' />
                    @annamarts</a>
            </div>
            <div className={style.cv_info_block}>
                <h3 className={style.cv_info_headline}>Contact me</h3>
                <p>Email: <span>immarhart28261458s5@gmail.com</span></p>
                <p>+375(29)196-16-18</p>
                <p>+375(29)665-76-12</p>
            </div>
        </div>
    )
}

export default InfoBlock;