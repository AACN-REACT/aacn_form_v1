import React, { useState, useEffect, Component } from 'react';


const fields = [


    { name: "country", type: "select", className: "", options: [], hasParent: false, label: "Country" },
    { name: "state", type: "select", className: "", options: [], hasParent: false, label: "State" },
]


const countryData = [
    { code: "CAN", display: "Canada", key: "2222" },
    { code: "USA", display: "United States", key: "1111" },
    { code: "UK", display: "United Kingdom", key: "3333" },
    { code: "RUS", display: "Russia", key: "4444", selected: true }
];

const stateData = [
    { code: "MIL", display: "Milwaukae", pk: "United States" },
    { code: "TEX", display: "Texas", pk: "United States", selected: true },
    { code: "BERK", display: "berkshire", pk: "United Kingdom" },
    { code: "PET", display: "st petersburg", pk:"Russia" },
    { code: "ONT", display: "ontario", pk:"Canada"},
    { code: "LON", display: "london", pk:"United Kingdom" },
    { code: "ATL", display: "atlanta", pk: "United States" },
    { code: "MOS", display: "moscow", pk: "Russia", selected: true },
    { code: "MON", display: "montreal", pk: "Canada" },
    { code: "NFL", display: "NewfoundLand", pk: "Canada"},
    { code: "LVP", display: "Liverpool", pk: "United Kingdom" },
    { code: "SBR", display: "Siberia", pk:"Russia"},
    { code: "CA", display: "California", pk: "United States" }
];

function MakeSelect(selectClass, ...data) {


    const [index1, changeIndex] = useState("Russia");

    function cascade(ev) {
        console.log(ev.target.value)
        let group = ev.target.options; 
        let index = ev.target.selectedIndex;
        let el = group[index].dataset.num;
        changeIndex(el);
        console.log("This should be selected:",index1);
    }

    function test(ev){

        changeIndex(ev.currentTarget.options[ev.currentTarget.selectedIndex].value)
        console.log(ev.currentTarget.value);
        console.log(ev.currentTarget.options);
        console.log(ev.currentTarget.selectedIndex);
        console.log("TEXT chosen by onChange:  ", ev.currentTarget.options[ev.currentTarget.selectedIndex].dataset.num);
        console.log(index1)
        return undefined
    }
return(
        <>
            <select onChange={test} value={index1}>
                {countryData.map(item => (
                    <option
                        key={Math.random() * Math.random() * 10000}
                        data-num={item.key}
                    >
                        {item.display}
                    </option>
                ))}
            </select>
            <select>
                {stateData
                    .filter(el => el.pk === index1)
                    .map(item => (
                        <option key={Math.random() * Math.random() * 10000} >{item.display}</option>
                    ))}
            </select>
        </>
    )
            }
export default MakeSelect