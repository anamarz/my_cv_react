import style from './styles/info_block2.module.css'

const InfoBlock2 = () => {
	return (
		<div className={style.cv_eshe}>
			<div className={style.eshe_block_wrapper}>
				<h3 className={style.eshe_headline}>EDUCATION</h3>
				<div className={style.eshe_block}>
					<ul className={style.eshe_list}>
					<li>
						<h4>MINSK STATE LINGUISTIC UNIVERSITY </h4>
						<p>BACHELOR'S DEGREE | 09.2020 - 02.2025</p>
						<p>— I was taught to learn hard on my own and being
							responsible for myself; Got theoretical knowledge in many different fields;
							Studied several foreighn languages on a high level
						</p>
					</li>
					<li><h4>'TEACH ME SKILLS' PROGRAMMING SCHOOL </h4>
						<p>02.2022 - 12.2022</p>
						<p>— I completed the course of front-end developement.
							This experiense shone a positive light on education for me.
							It helped me to realise what I really want to do in my life.
						</p>
					</li>
				</ul>
				</div>
			</div>
			<div className={style.eshe_block_wrapper}>
				<h3 className={style.eshe_headline}>SKILLS</h3>
				<div className={style.eshe_block}>
					<ul className={style.eshe_list}>
					<li>HTML</li>
					<li>CSS, SCSS</li>
					<li>JAVASCRIPT</li>
				</ul>
				<ul className={style.eshe_list}>
					<li>TYPESCRIPT</li>
					<li>REACT</li>
					<li>ENGLISH LEVEL C1</li>
				</ul>
				</div>
			</div>
			<div className={style.eshe_block_wrapper}>
				<h3 className={style.eshe_headline}>HOBBIES</h3>
				<div className={style.eshe_block}>
				<ul className={style.eshe_list}>
					<li>PUZZLES</li>
					<li>PAINTING</li>
				</ul>
				<ul className={style.eshe_list}>
					<li>SINGING</li>
					<li>COOKING</li>
				</ul>
			</div>
			</div>
			<div className={style.eshe_block_wrapper}>
				<h3 className={style.eshe_headline}>EXPERIENCE</h3>
				<ul className={style.eshe_list}>
					<li> You can find the works I did while on courses and on my own on my GitHub Repositories page_
						 <a href='https://github.com/anamarz'>
                   anamarz</a> 
					</li>
				</ul>
			</div>
		</div>
	)
}

export default InfoBlock2;