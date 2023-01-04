import { NavigationDots, Socials } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <Socials />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p__text">@2022 SARAH DANIEL</p>
            {/* <p className="p__text">All rights reserved</p> */}
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
