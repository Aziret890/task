import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import phone from "./assets/phone.svg";
import email from "./assets/email.svg";
import maps from "./assets/maps.svg";
import telegram from "./assets/telegram.svg";
import what from "./assets/what.svg";
import insta from "./assets/insta.svg";
import back from "./assets/back.png";
import "./components/Header/Header.scss";
import burger from "./assets/burger.svg";
import burgerNone from "./assets/burderNone.svg";

import { useDropDown } from "./assets/ul/useDropDown";
import DropDown from "./assets/ul";
import { Button, Modal, Space } from "antd";

function App() {
  const [active, setActive] = useState<boolean>(true);
  const [modal, setModal] = useState<boolean>(false);
  const [drop1, setDrop1] = useState<[]>([]);

  const [data, setData] = useState<[]>([]);
  useEffect(() => {
    axios
      .get("https://postive.tata.kg/api/v1/products/categories", {
        headers: {
          "Accept-Language": "ru",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setData(res.data);
        setDrop1(data.data?.items?.map((el) => el.childs[0].name));
      })
      .finally(() => {
        setActive(false);
        console.log(drop1);
      });
  }, []);
  // console.log(data.data.items[0].childs[0]?.map((el) => el.name));
  console.log(data.data?.items?.map((el) => el.childs[0].name));
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <div style={{ background: `url(${back})` }} className="wrapper">
        <div className="header">
          <div className="container">
            <div className="header__content1">
              <img onClick={() => setModal(!modal)} src={burger} alt="" />
            </div>
            <div className="header__content">
              {/* <div className="burger__img__wrap">
                <img src={burger} alt="" />
              </div> */}
              <nav>
                <li>
                  <img src={phone} alt="" />
                </li>
                <li>
                  <img src={email} alt="" />
                </li>
                <li>
                  <img src={maps} alt="" />
                </li>
              </nav>
              <nav className="gap-[30px]">
                <li>Заказать уборку</li>
                <li>Услуги</li>
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </nav>
              <nav className="header__nav">
                <li>
                  <img src={insta} alt="" />
                </li>
                <li>
                  <img src={what} alt="" />
                </li>
                <li>
                  <img src={telegram} alt="" />
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className={`modal_none ${modal ? "active__modal__wrap" : ""}`}>
          <button
            className="relative top-[-0px] left-[120px]"
            onClick={() => setModal(false)}
          >
            <img src={burgerNone} alt="" />
          </button>
          <div className="active__content">
            <nav className="header__nav1 flex flex-col items-center gap-[40px]">
              <li className="header__nav1__li">Заказать уборку</li>
              <li>Услуги</li>
              <li>О нас</li>
              <li>Отзывы</li>
              <li>Контакты</li>
            </nav>
            <nav className="flex justify-center gap-[40px]">
              <li>
                <img src={phone} alt="" />
              </li>
              <li>
                <img src={email} alt="" />
              </li>
              <li>
                <img src={maps} alt="" />
              </li>
            </nav>
            <nav className="header__nav flex justify-center gap-[40px]">
              <li>
                <img src={insta} alt="" />
              </li>
              <li>
                <img src={what} alt="" />
              </li>
              <li>
                <img src={telegram} alt="" />
              </li>
            </nav>
          </div>
        </div>
        <div className="hero mt-[20px]">
          <div className="container">
            <div className="hero__content flex flex-col items-center">
              <div
                className={` mb-[40px] loader ${active ? "loader-active" : ""}`}
              >
                <img
                  className="w-[100%] h-[100%] loader-img"
                  src="https://s3-alpha-sig.figma.com/img/09c7/b1f0/243275f843a742c1835e229f0623cfd7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RB9nl5wXAN9ZutGoXPvL5mt22aDoHXu~sLjruPSgPTyx34WyuhczQuWcIxCQ9kEt5v~0Zp5t4LtfCo1qg5qQUfkq1~QWhK5NaUZFBWwWTX0TqBF7wTExk5mzqi55y6pCE~Ctc9yFK1F0u5OKNboNo1ySiXWwsrTO3No0qWP5JfwnIL8QF7GHL07yFCltbbDic1klszNguLPe3A8YRyACR-IW~4~h91zqNWLTF9T~B7H9-mw5ETAzpYs-emtxoM2gDveyQAEA4XK7N2ZVzZmJO1~rVQV68px9FU6pNiR13NDL0l4m2GKXbK1RXuSKyNXSqKOvRaz3tKbYtDnBKd4epA__"
                  alt=""
                />
              </div>
              <h1>Чистый мир – Ваш путь</h1>
              <h1>к идеальной чистоте и комфорту!</h1>
              <div className="flex flex-col mt-[83px] mb-[36px] gap-[30px]">
                <input type="text" name="" id="" placeholder="Ваше имя " />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Ваш номер телефона или WhatsApp"
                />
              </div>
              <div className="">
                <button>Заказать уборку</button>
              </div>
            </div>
          </div>
        </div>
        <Space>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Button
            type="primary"
            onClick={() => {
              Modal.confirm({
                title: "Confirm",
                content: "Bla bla ...",
                footer: (_, { OkBtn, CancelBtn }) => (
                  <>
                    <Button>Custom Button</Button>
                    <CancelBtn />
                    <OkBtn />
                  </>
                ),
              });
            }}
          >
            Open Modal Confirm
          </Button>
        </Space>
        <Modal
          open={open}
          // title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={(_, { OkBtn, CancelBtn }) => (
            <>
              {/* <Button>Custom Button</Button> */}
              <CancelBtn />
              <OkBtn />
            </>
          )}
        >
          {drop1?.map((el) => (
            <p>{el}</p>
          ))}
        </Modal>
        <section>
          <div className="container">
            <h1 className="h1_section">Наши услуги</h1>
            <div className="section__content">
              <nav className="">
                {data.data?.items?.map((el) => (
                  <li>
                    <img onClick={() => showModal()} src={el.image} alt="" />
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
