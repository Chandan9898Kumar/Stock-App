import React, { useState } from 'react'

const API_URL = "https://jsonmock.hackerrank.com/api/stocks";
const FunctionData = () => {
    const [input, setInput] = useState('')
    const [storedata, setStoreData] = useState()

    const Onchangefunction = (e) => {
        setInput(e.target.value)
    }

    const OnclickHandle = async (e) => {
        e.preventDefault()
        if (input === '') {
            return
        }
        await fetch(`${API_URL}?date=${input}`)
            .then(response => response.json())
            .then((result) => {
                setStoreData(result.data)
            })
        setInput('')

    }
    console.log(storedata, "my data")
    return (
        <>
            <h2> Functional Component fetching  Stock Data</h2><br />
            <input
                type="text"
                value={input}
                onChange={Onchangefunction}
                placeholder='5-January-2000'
            /><br />
            <button
                type="submit"
                onClick={OnclickHandle}

            >Click Here</button>
            <br />
            {/* {
                storedata.length === 0 ?
                    'No Result Found' :
                    <>
                        <ul>
                            <li>
                                Date : {storedata[0].date}<br />
                                High : {storedata[0].high}<br />
                                Low : {storedata[0].low}<br />
                                Open : {storedata[0].open}<br />
                                Close : {storedata[0].close}<br />
                            </li>
                        </ul>
                    </>

            } */}
            {storedata &&
                (storedata.length > 0 ? (
                    <ul>
                        <li>
                            Date : {storedata[0].date}<br />
                            High : {storedata[0].high}<br />
                            Low : {storedata[0].low}<br />
                            Open : {storedata[0].open}<br />
                            Close : {storedata[0].close}<br />
                        </li>
                    </ul>
                ) : (
                    <div>No Results Found </div>
                ))}

        </>
    )
}
export default FunctionData;