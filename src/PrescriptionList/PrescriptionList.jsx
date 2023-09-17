import { useState, useEffect } from "react";
import AddPrescription from "../AddPrescription/AddPrescription";

export default function PrescriptionList() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
   fetch('http://13.41.157.172:5000/prescriptions/').then((res) => {
    return res.json() 
   }).then((data) => {
    setPrescriptions(data.prescriptions)
   })
  }, []);

  return (
    <section>
      {prescriptions.map((prescription) => (
        <ol key={prescription.id}>
          <li>
            <h2> Item: {prescription.item}</h2>
            <p> Dosage: {prescription.dosage}</p>
            <p> Quantity: {prescription.quantity}</p>
            <p> Paitent ID: {prescription.patient_id}</p>
          </li>
        </ol>
      ))}
      <AddPrescription setPrescriptions={setPrescriptions} />
    </section>
  );
}
