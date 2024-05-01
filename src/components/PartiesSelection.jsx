import React from "react";
import "./PartiesSelection.css";
function PartiesSelection() {
  return (
    <>
      <section className="add-party">
        <div class="party-form">
          <form>
            <label for="party-name">Party Name</label>
            <input
              type="text"
              id="party-name"
              placeholder="Atleast three characters"
              required
            />
            <label for="party-symbol">Party Symbol</label>
            <input
              type="text"
              id="party-symbol"
              placeholder="Bat, Lion, etc."
              required
            />
            <label for="chairman">Enter the Chairman Name</label>
            <input
              type="string"
              id="chairman"
              placeholder="Imran Khan etc."
              required
            />
            <label for="createdAt">Date of creation</label>
            <input type="date" id="createdAt" name="createdAt" />
            <input type="submit" />
          </form>
        </div>
      </section>
    </>
  );
}

export default PartiesSelection;
