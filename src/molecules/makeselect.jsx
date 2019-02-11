import React, { useState} from 'react';





function MakeSelect({selectGroup,data1, data2}) {



console.log(data1.filter(el=>el.selected?el.selected:data1.indexOf(el)===[0]).display)
    const [index1, changeIndex] = useState(data1.filter(el=>el.selected)[0])
console.log("CURRENT VALUE",index1)    


    function handleSelectChange(ev){

        changeIndex(data1.filter(item=>item.display===(ev.currentTarget.options[ev.currentTarget.selectedIndex].value))[0])
        console.log(ev.currentTarget.value);
        console.log(ev.currentTarget.options);
        console.log(ev.currentTarget.selectedIndex);
        console.log("TEXT chosen by onChange:  ", ev.currentTarget.options[ev.currentTarget.selectedIndex].dataset.num);
        console.log(index1)
        return undefined
    }

    
return(
        <>
            <select onChange={handleSelectChange} value={index1.display}>
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
                    .filter(el => el.pk === index1.key)
                    .map(item => (
                        <option key={Math.random() * Math.random() * 10000} >{item.display}</option>
                    ))}
            </select>
        </>
    )
            }
export default MakeSelect