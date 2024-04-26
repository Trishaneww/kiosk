import './MenuSidebar.scss';

const MenuSidebar = () => {

    const categories = [
        {
          id: 1,
          name: "Bowl Combos",
        },
        {
          id: 2,
          name: "Signature Bowls",
        },
        {
          id: 3,
          name: "Custom Bowl",
        },
        {
          id: 4,
          name: "Roll Combos",
        },
        {
          id: 4,
          name: "Signature Rolls",
        },
        {
          id: 4,
          name: "Custom Roll",
        },
        {
          id: 5,
          name: "Sides",
        },
        {
          id: 6,
          name: "Drinks",
        },
        {
          id: 7,
          name: "Desserts",
        },
      ];
  return (
    <>
      <div className="main">
        <section className="sidebar">
          <p className="sidebar-logo">FOOD<span>BYTE</span></p>
          {categories.map((category) => (
            <div className="sidebar-link">
                <p>{category.name}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default MenuSidebar