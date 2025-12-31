export default function PricingCalculator({
  activeTab,
  selection,
  setSelection
}) {
  const jerseyPrices = {
    "Short Sleeve Jersey": { Adult: 28, Kid: 25 },
    "Long Sleeve Jersey": { Adult: 30, Kid: 27 },
    "Muslimah Jersey": { Adult: 35, Kid: 32 }
  };

  const urgentOptions = [
    { id: "normal", label: "Normal: 5-7 Days", price: 0 },
    { id: "3days", label: "3 Days", price: 7 },
    { id: "2days", label: "2 Days", price: 10 }
  ];

  let total = 0;

  // Base jersey price
  if (selection.jersey) {
    total += jerseyPrices[selection.jersey.name][selection.size];
  }

  // Material price
  if (selection.material) {
    total += selection.material.price;
  }

  // Big size surcharge
  if (selection.bigSize) {
    total += selection.bigSize.price;
  }

  // Add-ons (multi-select)
  const addonsTotal = selection.addons.reduce(
    (sum, addon) => sum + addon.price,
    0
  );
  total += addonsTotal;

  // Urgent charge
  if (selection.urgent) {
    total += selection.urgent.price;
  }

  return (
    <section className="calculator">
      <h2>Live Price Calculator</h2>

      {/* SIZE TOGGLE */}
      <div className="size-toggle">
        {["Adult", "Kid"].map(size => (
          <button
            key={size}
            className={selection.size === size ? "active" : ""}
            onClick={() =>
              setSelection(prev => ({ ...prev, size }))
            }
          >
            {size}
          </button>
        ))}
      </div>

      {/* URGENT CHARGE */}
      <div className="urgent-section">
        <h4>Production Time</h4>
        <div className="urgent-options">
          {urgentOptions.map(u => (
            <button
              key={u.id}
              className={
                selection.urgent?.id === u.id ? "active" : ""
              }
              onClick={() =>
                setSelection(prev => ({ ...prev, urgent: u }))
              }
            >
              {u.label}
              {u.price > 0 && ` (+ RM ${u.price}/pcs)`}
            </button>
          ))}
        </div>
      </div>

      {/* SUMMARY */}
      <ul className="summary">
        {selection.jersey && (
          <li>
            <strong>Jersey:</strong> {selection.jersey.name}
          </li>
        )}

        {selection.material && (
          <li>
            <strong>Material:</strong> {selection.material.name}
          </li>
        )}

        {selection.bigSize && (
          <li>
            <strong>Big Size:</strong> {selection.bigSize.label}
          </li>
        )}

        {selection.addons.length > 0 &&
          selection.addons.map(a => (
            <li key={a.id}>
              <strong>Add-on:</strong> {a.name}
            </li>
          ))}

        {selection.urgent && selection.urgent.price > 0 && (
          <li>
            <strong>Urgent in </strong> {selection.urgent.label}
          </li>
        )}

        {selection.addons.length === 0 && (
          <li className="muted">No add-ons selected</li>
        )}
      </ul>

      {/* TOTAL */}
      <div className="total">
        Estimated Price: <strong>RM {total}</strong>
      </div>
    </section>
  );
}
