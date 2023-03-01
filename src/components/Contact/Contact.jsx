import "./contact.scss";
import { MdLocationPin, MdCall, MdMail } from "react-icons/md";

const ContactComp = () => {
  return (
    <div className="contactComponent">
      <div className="topbarInfo">
        <h1 className="title">Contact Us</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="formContainer flex">
        <div className="form flex">
          <div className="topForm flex">
            <div className="nameForm">
              <div className="nameTitle">Name: </div>
              <input className="inputForm" placeholder="Tuliskan Nama Anda" />
            </div>
            <div className="subjectForm">
              <div className="nameTitle">Subject: </div>
              <input
                className="inputForm"
                placeholder="Tuliskan Subject Anda"
              />
            </div>
          </div>
          <div className="bottomForm flex">
            <div className="emailForm">
              <div className="nameTitle">Email: </div>
              <input className="inputForm" placeholder="Tuliskan Email Anda" />
            </div>
            <div className="PesanForm">
              <div className="nameTitle">Pesan: </div>
              <input className="inputForm" placeholder="Tuliskan Pesan Anda" />
            </div>
          </div>
          <button className="btn radius-2">Submit </button>
        </div>
      </div>
      <div className="cardsInformation flex">
        <div className="informationContact flex">
          <div className="cardInformationContact flex">
            <div className="circle flex">
              <MdCall className="icon" />
            </div>
            <p className="infomationName">080000000</p>
          </div>
          <div className="cardInformationContact flex">
            <div className="circle flex">
              <MdLocationPin className="icon" />
            </div>
            <p className="infomationName">Depok, Jawa Barat, Indonesia</p>
          </div>
          <div className="cardInformationContact flex">
            <div className="circle flex">
              <MdMail className="icon" />
            </div>
            <p className="infomationName">xxx@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
