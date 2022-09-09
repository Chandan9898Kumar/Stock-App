import React from 'react'
const API_URL = "https://jsonmock.hackerrank.com/api/stocks";
class ClassData extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input:'',
            StoreData:[]
        }
    }
Handle=async(e)=> {
    const {input,StoreData}=this.state
    e.preventDefault()
    if(input===''){
        return
    }
    await fetch(`${API_URL}?date=${input}`)
    .then(response=> response.json())
    .then((data)=> {
        this.setState({
            StoreData:data.data,
            input:''
        })
    })

}



render()
{const {input,StoreData}=this.state
  
return (console.log(StoreData,"data"),
    <>
    <h2>Class Component</h2><br />
    <input
    type="text"
    value={input}
    onChange={(e)=> this.setState({input:e.target.value})}
    /><br /><br />
    <button
    type="submit"
    onClick={this.Handle}
    >Click Here </button><br />

{
    StoreData.length === 0 ?
                    'No Result Found' :
                    <>
                        <ul>
                            <li>
                                Date : {StoreData[0].date}<br />
                                High : {StoreData[0].high}<br />
                                Low : {StoreData[0].low}<br />
                                Open : {StoreData[0].open}<br />
                                Close : {StoreData[0].close}<br />
                            </li>
                        </ul>
                    </>

            }



    </>
)
}

}

export default ClassData;