import style from "./SuccessAlert.module.scss";
import { createPortal } from "react-dom";

const SuccessAlert = ({ alertText, alertToggleModal, setAlertToggleModal }) => {
  return (
    <>
      {alertToggleModal &&
        createPortal(
          <div
            className={style.container}
            onClick={() => setAlertToggleModal(false)}
          >
            <div className={style.container_inner}>
              <p className={style.inner_text}>{alertText}</p>
              <span className={style.tip}>
                Подсказка: закрыть окно можно нажав на любую облать экрана.
              </span>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default SuccessAlert;
