import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";
import LanguageHelper, {
  LangSelector,
} from "../../utils/reducer/helpers/lang/LanguageManager";
import "./Navigation.styles.scss";

const Navigation = () => {
  const [selectedLang, setSelectedLang] = useState("tr-TR");
  const { i18n } = useTranslation();
  let lngSt = "";

  const locationPath = useLocation().pathname;
  const onLangChangeHandler = (event) => {
    i18n.changeLanguage(selectedLang);
    setSelectedLang(event.target.value);

    console.log(event.target.value);
  };
  useEffect(() => {
    return () => {
      setSelectedLang("en-US");
    };
  }, i18n);

  return (
    <Fragment>
      <div className="topnav">
        <Link
          className={` ${
            locationPath === "/" || locationPath === "/home" ? "active" : ""
          }`}
          to="/"
        >
          {LanguageHelper("HOME")}
        </Link>
        <Link
          className={` ${locationPath === "/function" ? "active" : ""}`}
          to="/function"
        >
          {LanguageHelper("FUNCTION")}
        </Link>
        <Link
          className={` ${locationPath === "/class" ? "active" : ""}`}
          to="/class"
        >
          {LanguageHelper("CLASS")}
        </Link>
        <div style={{ float: "right" }}>
          <Link
            className={` ${locationPath === "/class" ? "active" : ""}`}
            to="/class"
          >
            {LanguageHelper("CLASS")}
          </Link>
          <select
            id="languages"
            name="languages"
            onChange={onLangChangeHandler}
          >
            {/* <option>Select Language</option> */}
            <option value="en-US">English (United States)</option>
            <option value="tr-TR" selected>
              Turkish - Türkçe
            </option>
          </select>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
