import style from './styles/main.module.css';
import image from './images/Slyopa.jpg';
import InfoBlock from './InfoBlock';
import InfoBlock2 from './InfoBlock2';

const Main = () => {
	return (
		<div className={style.cv_container}>

			<div className={style.cv_image_wrapper}>
				<img className={style.cv_image}
					src={image} alt='Anna Martsinkevich' />
			</div>
			<div className={style.cv_info_wrapper}>
				<InfoBlock />
				<InfoBlock2 />
			</div>
		
		</div>
	)
}
export default Main;