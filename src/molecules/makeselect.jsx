import React, { useState, useEffect, Component } from 'react';


const fields = [


    { name: "country", type: "select", className: "", options: [], hasParent: false, label: "Country" },
    { name: "state", type: "select", className: "", options: [], hasParent: false, label: "State" },
]

function MakeSelect({fields,selectClass, data1, data2}) {



console.log(data1)
    const [index1, changeIndex] = useState("United States");

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
                {data1.map(item => (
                    <option
                        key={Math.random() * Math.random() * 10000}
                        data-num={item.key}
                    >
                        {item.display}
                    </option>
                ))}
            </select>
            <select>
                {data2
                    .filter(el => el.pk === index1)
                    .map(item => (
                        <option key={Math.random() * Math.random() * 10000} >{item.display}</option>
                    ))}
            </select>
        </>
    )
            }
export default MakeSelect