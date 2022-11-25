// create a new component called NavigationDots

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "projects", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation--dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
