import React,{useState} from 'react';
import { Bar } from 'react-chartjs-2';
import {useSelector } from 'react-redux';
import './IssueChart.css';

const VerticalBar = () => {

    const Issues = useSelector(state => state.issue.issues);
    const AllIssues = Issues.map(issue =>{ return {desc:issue.description.substr(0,20),views:issue.views}});
    const compare =(a,b)=>{
        return a.views > b.views ? -1 : b.views > a.views ? 1 : 0;
    }
    
    let [val,setVal] =useState(3);

    const handleChange = (ev)=> {
        setVal(ev.target.value);
    }   
    const topIssues = AllIssues.sort(compare).splice(0,val);

    const data = {
        labels: [ ...topIssues.map(issue => issue.desc)],
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
    <div className="container">
        <div className='header mt-3 mb-5'>
          <h1 className='title'>Top Viewed Issues</h1>
          
        </div>
        
        <div className="container chart-controller mb-4">
          <h5>Select Qty of Results :</h5>
          <select className='form-control w-25' name="qtyOfResult" onChange={handleChange}>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="7">7</option>
          </select>
        </div>
        <div className="container chart-container">
          <Bar data={data} options={options} />
        </div>
    </div>  
  </>
)};

export default VerticalBar;