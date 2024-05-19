/* eslint-disable react/jsx-pascal-case */
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Section_Five from "./Section_Five/Section_Five";
import Section_Four from "./Section_Four/Section_Four";
import Section_One from "./Section_One/Section_One";
import Section_Three from "./Section_Three/Section_Three";
import Section_Two from "./Section_Two/Section_Two";


function Front() {
    return(
        <>
           
            <Section_One />
            <Section_Five />
            <Section_Three />
            <Section_Two />
            <Section_Four />
        </>
    )
}
export default Front;