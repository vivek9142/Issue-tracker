import React,{useState} from 'react';
import { Bar } from 'react-chartjs-2';
import {useSelector,useDispatch } from 'react-redux';

const VerticalBar = () => {

    const Issues = useSelector(state => state.issue.issues);
    const  dispatch = useDispatch();
    const viewsArray = Issues.map(issue => issue.views);
    const topViews = viewsArray.sort((a,b) => b-a)
    const AllIssues = Issues.map(issue =>{ return {id:issue.id,views:issue.views}});
    const compare =(a,b)=>{
        return a.views > b.views ? -1 : b.views > a.views ? 1 : 0;
    }
    
    let [val,setVal] =useState(3);

    const handleChange = (ev)=> {
        setVal(ev.target.value);
    }   
    const topIssues = AllIssues.sort(compare).splice(0,val);

    const data = {
        labels: [ ...topIssues.map(issue => issue.id)],
        datasets: [
          {
            label: '# of Views',
            data: [...topIssues.map(issue => issue.views)],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    return(
  <>
    <div className='header'>
      <h1 className='title'>Vertical Bar Chart</h1>
      
    </div>
    <select name="qtyOfResult" onChange={handleChange}>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
    </select>
    <Bar data={data} options={options} />
  </>
)};

export default VerticalBar;