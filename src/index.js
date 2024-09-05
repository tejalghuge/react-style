import { createRoot } from "react-dom/client";
import greting, { GoodEvening, GoodMoring } from './greting';

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
    <h1 style={{
        textAlign:"center",
        color:"black",
    }}>ALL GRETTING</h1>
 <greting name="Gayatri"  />
 <GoodMoring name="Aditi" />
 <GoodEvening  name="Ankita"/>

 </div>
)