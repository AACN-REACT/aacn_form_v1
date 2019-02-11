import React, { useState} from 'react';





function MakeSelect({selectElement}) {

console.log(selectElement)

console.log(selectElement.options.filter(el=>el.selected?el.selected:selectElement.options.indexOf(el)===[0]).display)
    const [index1, changeIndex] = useState(selectElement.options.filter(el=>el.selected)[0])
console.log("CURRENT VALUE",index1)    


    function handleSelectChange(ev){

        changeIndex(selectElement.options.filter(item=>item.display===(ev.currentTarget.options[ev.currentTarget.selectedIndex].value))[0]);
        sessionStorage.setItem(selectElement.name,  selectElement.options.filter(item=>item.display===(ev.currentTarget.options[ev.currentTarget.selectedIndex].value))[0])

        return undefined
    }

    console.log("The parent fields are:",Object.keys(selectElement).indexOf("parent"))
    if (Object.keys(selectElement).indexOf("parent")<0){ 
return(
        <>
            <select onChange={handleSelectChange} value={index1.display}>
                {selectElement.options.map(item => (
                    <option
                        key={Math.random() * Math.random() * 10000}
                        data-num={item.key}
                    >
                        {item.display}
                    </option>
                ))}
            </select>
           </>
)
                }
                else { 
        return (
        <>
            <select>
                {selectElement.options
                    .filter(el => {console.log("prop:",selectElement.parent);return el.pk === sessionStorage.getItem(selectElement.parent)})
                    .map(item => (
                        <option key={Math.random() * Math.random() * 10000} >{item.display}</option>
                    ))}
            </select>
        </>
    )
            }
        }
export default MakeSelect