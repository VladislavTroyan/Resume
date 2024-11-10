import './App.css';
import troyanPhoto from './media/troyanphoto.jpg';


function App() {
  return (
    <div className="App">
      <div className="veri-big-container">
        <div className="row-one">
          <div className="photo-name-speciality-container">
            <div className="photo-container"><img src={troyanPhoto} alt="Описание изображения" /></div>
            <div className="name-speciality-container">
              <div className="name-container">Владислав Троян</div>
              <div className="speciality-container">Junior developer<br/>Программист ПЛК</div>
            </div>
            <a href="/PDF_file/resume.pdf" download="Резюме_Владислав_Троян.pdf">
              <button className="download-resime">Загрузить PDF</button>
            </a>
          </div>
          <div className="basic-information">
            <div className="orange-title1">Личные данные</div>
            <div className="basic-title-info">
              <div className="basic-title">Номер телефона</div>
              <div className="basic-info"><a href="tel:+79171149939">+7 (917) 114-99-39</a></div>
            </div>
            <div className="basic-title-info">
              <div className="basic-title">Email</div>
              <div className="basic-info"><a href="mailto:vladislav.troyan02@mail.ru">vladislav.troyan02@mail.ru</a></div>
            </div>
            <div className="basic-title-info">
              <div className="basic-title">GitHub</div>
              <div className="basic-info"><a href="https://github.com/VladislavTroyan" target="_blank" rel="noopener noreferrer">
              github.com/VladislavTroyan</a></div>
            </div>
            <div className="basic-title-info">
              <div className="basic-title">Адрес</div>
              <div className="basic-info">ул. Мориса-Тореза д. 44<br/>443093 Самара</div>
            </div>
            <div className="basic-title-info">
              <div className="basic-title">Дата рождения</div>
              <div className="basic-info">13.01.2002</div>
            </div>
          </div>
        </div>



        <div className="row-two">
          <div className="top-container">
            <div className="orange-title">Профиль</div>
            <div className="basic-info-no-one-row">Развиваюсь как специалист в веб-разработке с фокусом на создании веб-приложений 
              на основе React, Node.js, Django. Есть опыт работы с базами данных, включая их проектирование. За время учёбы 
              приобрёл такие навыки как: системное мышление, проектирование АСУ ТП, программирование ПЛК. Готов 
              применять свои знания для решения практических задач. Постоянно изучаю новые технологии и стремлюсь к 
              профессиональному росту.</div>
          </div>
          <div className="last-container">
            <div className="orange-title">Проекты</div>
            <div className="black-title">Web-интефейс для взаимодействия пользователя с базой данных</div>
            <div className="basic-info-no-one-row">
              <ul>
                <li>Разработка web-интерфейса на Django</li>
                <li>Использование PostgreSQL для хранения данных</li>
                <li>Администрирование сайта для настройки общего доступа пользователей</li>
              </ul>
            </div>
            <div className="black-title">Telegram-бот для студии косметологии</div>
            <div className="basic-info-no-one-row">
              <ul>
                <li>Бот в роли интерфейса для записи клиентов</li>
                <li>Разработка на языке Python</li>
                <li>Разработка БД на базе PostgreSQL</li>
              </ul>
            </div>
          </div>
          <div className="last-container">
            <div className="orange-title">Опыт работы</div>
            <div className="black-title">Репетитор по математике</div>
            <div className="basic-info-no-one-row">
              <ul>
                <li>Подготовка к ОГЭ/ЕГЭ</li>
                <li>С декабря 2022 по июнь 2024</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row-three">
          <div className="top-container">
            <div className="orange-title">Образование</div>
            <div className="black-title">Самарский национальный исследовательский университет имени академика С.П. Королева</div>
            <div className="basic-info-no-one-row">Специальность: “Радиотехника” Обучения с сентября 2019 по июль 2021</div>
            <div className="black-title">Самарский Государственный Технический университет</div>
            <div className="basic-info-no-one-row">Специальность: “Управление и информатика в технических системах”</div>
            <div className="basic-info-no-one-row">
              <ul>
                <li>Обучение с сентября 2021 по настоящее время</li>
                <li>Средний балл - 4.68</li>
                <li>Прохождение практики в “ЗАО ТМ-Сервис”</li>
                <li>Участие в нескольких практико-ориентированных проектах</li>
                <li>Участие в конференциях, олимпиадах, научной работе</li>
              </ul>
            </div>
          </div>
          <div className="last-container">
            <div className="orange-title">Навыки</div>
            <div className="black-title">Языки программирования:</div>
            <div className="basic-info-no-one-row">
              <div className="skills">
                <div className='skill'>SQL</div>
                <div className='skill'>Python</div>
                <div className='skill'>C++</div>
                <div className='skill'>MATLAB</div>
                <div className='skill'>HTML/CSS</div>
                <div className='skill'>JavaScript</div>
                <div className='skill'>Assembler</div>
              </div>
            </div>
            <div className="black-title">Среды разработки/Системы:</div>
            <div className="basic-info-no-one-row">PyCharm, VS Code, PostgreSQL, MSSQL, Git, Linux, MATLAB,
               КОМПАС-3D, CODESYS, NI Multisim</div>
            <div className="black-title">Языки программирования промышленных контроллеров:</div>
            <div className="basic-info-no-one-row">ST, FBD, SFC, LD</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
