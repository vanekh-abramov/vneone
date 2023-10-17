import style from "./PriceButton.module.scss";

const PriceButton = ({
  price,
  btnWidth,
  btnMargin,
  btnPadding,
  btnFontSize,
  btnMarginBottom,
}) => {
  const myStyles = {
    width: btnWidth,
    textAlign: "center",
    margin: btnMargin,
    marginBottom: btnMarginBottom,
    padding: btnPadding,
    borderRadius: "19.58px",
    background: "#000",
    color: "#fff",
    fontFamily: "Comfortaa",
    fontSize: btnFontSize,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  };

  return (
    <div className={style.price} style={myStyles}>
      {price}₽
    </div>
  );
};

export default PriceButton;
