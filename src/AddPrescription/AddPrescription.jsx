import { useState } from "react";

export default function AddPrescription({ setPrescriptions }) {
  const [dosage, setDosage] = useState("");
  const [item, setItem] = useState("floss");
  const [quantity, setQuantity] = useState("");

  console.log(dosage);

  const handleSumbit = (event) => {
    event.preventDefault();
    addPrescription();
  };

  const prescriptionToAdd = {
    dosage: dosage,
    item: item,
    patient_id: 9,
    quantity: quantity,
  };

  const addPrescription = () => {
    fetch("http://13.41.157.172:5000/prescriptions/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prescriptionToAdd),
    }).then((res) => {
        return res.json()
    }).then((data) => 
    setPrescriptions((currPrescriptions) => {
        return [...currPrescriptions, data];
  }))
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        id="dosage"
        value={dosage}
        onChange={(event) => setDosage(event.target.value)}
      />
      <label htmlFor="dosage">Dosage :</label>
      <select
        value={item}
        id="item"
        onChange={(e) => {
          setItem(e.target.value);
        }}
      >
        <option value="oil">Oil</option>
        <option value="floss">Floss</option>
      </select>
      <input
        type="text"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
