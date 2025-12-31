const jerseys = [
  { id: 1, name: "Short Sleeve Jersey" },
  { id: 2, name: "Long Sleeve Jersey" },
  { id: 3, name: "Muslimah Jersey" }
];

const standardMaterials = [
  { id: "eyelet", name: "Eyelet / Interlock", price: 0 },
  { id: "ripk", name: "Ripk / Diamond", price: 5 },
  { id: "lycra", name: "Lycra", price: 10 }
];

const premiumMaterials = [
  { id: "contoh katalog", name: "contoh katalog", price: 8 }
];


const addons = [
  { id: "name", name: "Name", price: 1 },
  { id: "number", name: "Number", price: 1 },
  { id: "sulam", name: "Sulam (1 Spot)", price: 3 },
  { id: "block-sulam", name: "Block Sulam", price: 20 }
];

const bigSizes = [
  { id: "3xl-5xl", label: "3XL – 5XL", price: 3 },
  { id: "6xl-8xl", label: "6XL – 8XL", price: 6 },
  { id: "9xl-11xl", label: "9XL – 11XL", price: 9 }
];

export default function JerseyGrid({
  activeTab,
  setActiveTab,
  selection,
  setSelection
}) {
  const toggleAddon = addon => {
    setSelection(prev => {
      const exists = prev.addons.find(a => a.id === addon.id);
      return {
        ...prev,
        addons: exists
          ? prev.addons.filter(a => a.id !== addon.id)
          : [...prev.addons, addon]
      };
    });
  };

  const clearAddons = () => {
    setSelection(prev => ({ ...prev, addons: [] }));
  };

  return (
    <section className="catalog">
      <div className="catalog-container">
        <h2 className="catalog-title">Catalogue</h2>

        {/* Tabs */}
        <div className="tabs">
          {["jerseys", "materials", "addons", "bigsize"].map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid">
          {/* JERSEYS */}
          {activeTab === "jerseys" &&
            jerseys.map(j => (
              <div
                key={j.id}
                className={`card selectable ${
                  selection.jersey?.id === j.id ? "active-card" : ""
                }`}
                onClick={() =>
                  setSelection(prev => ({ ...prev, jersey: j }))
                }
              >
                <h3>{j.name}</h3>
                <p>Select</p>
              </div>
            ))}

          {/* MATERIALS */}
          {activeTab === "materials" && (
            <div className="materials-wrapper">

              {/* STANDARD MATERIAL */}
              <h3 className="material-title">Standard Material - (MOQ: 5 pcs)</h3>
              <div className="grid">
                {standardMaterials.map(m => (
                  <div
                    key={m.id}
                    className={`card selectable ${
                      selection.material?.id === m.id ? "active-card" : ""
                    }`}
                    onClick={() =>
                      setSelection(prev => ({ ...prev, material: m }))
                    }
                  >
                    <h3>{m.name}</h3>
                    <p>{m.price === 0 ? "FREE" : `+ RM ${m.price}`}</p>
                  </div>
                ))}
              </div>

              {/* PREMIUM MATERIAL (UNDER STANDARD) */}
              <h3 className="material-title premium">Premium Material - (MOQ: 30 pcs)</h3>
              <div className="grid">
                {premiumMaterials.map(m => (
                  <div
                    key={m.id}
                    className={`card selectable ${
                      selection.material?.id === m.id ? "active-card" : ""
                    }`}
                    onClick={() =>
                      setSelection(prev => ({ ...prev, material: m }))
                    }
                  >
                    <h3>{m.name}</h3>
                    <p>{`+ RM ${m.price}`}</p>
                  </div>
                ))}
              </div>

            </div>
          )}


          {/* ADD-ONS */}
          {activeTab === "addons" && (
            <>
              <div
                className="card selectable clear"
                onClick={clearAddons}
              >
                <h3>No Add-ons</h3>
                <p>Reset</p>
              </div>

              {addons.map(a => (
                <div
                  key={a.id}
                  className={`card selectable ${
                    selection.addons.some(x => x.id === a.id)
                      ? "active-card"
                      : ""
                  }`}
                  onClick={() => toggleAddon(a)}
                >
                  <h3>{a.name}</h3>
                  <p>+ RM {a.price}</p>
                </div>
              ))}
            </>
          )}
          
          {/* BIG SIZE */}
          {activeTab === "bigsize" && (
            <>
              <div
                className="card selectable clear"
                onClick={() =>
                  setSelection(prev => ({ ...prev, bigSize: null }))
                }
              >
                <h3>Normal Size</h3>
                <p>No extra charge</p>
              </div>

              {bigSizes.map(b => (
                <div
                  key={b.id}
                  className={`card selectable ${
                    selection.bigSize?.id === b.id ? "active-card" : ""
                  }`}
                  onClick={() =>
                    setSelection(prev => ({ ...prev, bigSize: b }))
                  }
                >
                  <h3>{b.label}</h3>
                  <p>+ RM {b.price}</p>
                </div>
              ))}
            </>
          )}

        </div>
      </div>
    </section>
  );
}
