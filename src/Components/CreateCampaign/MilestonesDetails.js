import React, { useEffect, useState } from 'react'
import './MilestonesDetailsStyles.css'

const MilestonesDetails = ({ milestonesData, setMilestonesData, noOfMilestones, setNoOfMilestones, overallData,milestoneProgress,setMilestoneProgress}) => {
    console.log(milestonesData)
    console.log(milestoneProgress)
    const [closeDropdown, setCloseDropdown] = useState(milestonesData.length < 3 ? false : true)
    useEffect(()=>{
        if (milestonesData.length>= 3){
            let progressTemp = []
            let i = 100 / milestonesData.length;
            while (i < 101) {
                progressTemp.push(i)
                i += 100 / milestonesData.length;
            }
            setMilestoneProgress(progressTemp)
            console.log(progressTemp)
        }
    },[])
    const handleSetMileStones = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setNoOfMilestones(e.target.value)
        setCloseDropdown(true)

        let progressTemp = []
        let DataForMileStone = []
        let i = 100 / e.target.value;
        while (i < 101) {
            let temp = { title: '', description: '', progress: '', duration: 3 }
            progressTemp.push(i)
            temp.progress = i
            DataForMileStone.push(temp)
            i += 100 / e.target.value;
        }
        console.log(DataForMileStone)
        setMilestonesData(DataForMileStone)
        console.log(progressTemp)
        setMilestoneProgress(progressTemp)

        let save_data = {
            ...overallData,
            milestonesData: milestonesData,
        }
        console.log(save_data)
        
    }

    return (
        <div className='milestonesDetails-container'>
            {
                !closeDropdown && noOfMilestones < 3 ?
                    <div className='milestonesDetails-dropdown'>
                        <h5>How many Milestones</h5>
                        <select id="milestones" name='milestones' placeholder='Milestones Breakdown' value={noOfMilestones} onChange={handleSetMileStones} required>
                            <option value='null' disabled={true}>No. of Milestones</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                        </select>
                    </div>
                    :
                    <div className='milestonesDetails-innerContainer'>
                        <table>
                            <thead>
                                <tr>
                                    <th>S No.</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Progress</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {milestoneProgress.map((element, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1})</td>
                                        <td><input type="text" placeholder='Enter Title' defaultValue={milestonesData[index].title} onChange={(e) => {
                                            let temp = ([...milestonesData])
                                            temp[index].title = e.target.value;
                                            setMilestonesData(temp)
                                        }} required /></td>
                                        <td><textarea placeholder='Enter Description' defaultValue={milestonesData[index].description} onChange={(e) => {
                                            let temp = ([...milestonesData])
                                            temp[index].description = e.target.value;
                                            setMilestonesData(temp)
                                        }} required /></td>
                                        <td>{element.toFixed(2)}% </td>
                                        <td>
                                            <select onChange={(e) => {
                                                let temp = ([...milestonesData])
                                                temp[index].duration = Number(e.target.value);
                                                setMilestonesData(temp)
                                            }}>
                                                <option value={3}>3 Days</option>
                                                <option value={5}>5 Days</option>
                                                <option value={10}>10 Days</option>
                                                <option value={15}>15 Days</option>
                                                <option value={30}>1 Month</option>
                                                <option value={90}>3 Months</option>
                                                <option value={120}>4 Months</option>
                                            </select>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    )
}

export default MilestonesDetails