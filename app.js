const ctx = document.getElementById('bp')
const systolic = 'rgba(255, 99, 132, 0.2)'
const diastolic = 'rgba(255, 206, 86, 0.2)'
const heart = '#B3F400'
const heart_line='#8FC300'

const mydata=[
  {sys:130,dias:82,heart:88,label:''},
  {sys:138,dias:92,heart:100,label:''},
  {sys:146,dias:93,heart:92,label:''},
]

const chart = new Chart(ctx,{
  type:'bar',
  data:{
    labels:mydata.map(e=>e.label),
    datasets:[
      {
        data:mydata.map(e=>e.sys),
        backgroundColor: systolic,
        borderColor:'#E36881',
        borderWidth:1.2,
        label:'Systolic',
        datalabels:{
          color:'red',
          anchor:'center',
          clamp:true,
        }
      },
      {
        data:mydata.map(e=>e.dias),
        backgroundColor: diastolic,
        borderColor:'#F4AF00',
        borderWidth:1.2,
        label:'Diastolic',
        datalabels:{
          color:'red',
          anchor:'center',
          clamp:true,
        }
      },
      {
        data:mydata.map(e=>e.heart),
        backgroundColor: heart,
        borderColor:heart_line,
        borderWidth:3,
        fill:false,
        lineTension:0,
        label:'Heart',
        type:'line',
        showLine:true,
        datalabels:{
          color:'#6B9200',
          backgroundColor:'rgba(255,255,255,0.5)',
          borderColor:'red',
          borderWidth:1,
          anchor:'start',
          align:'end',
          offset:5,
        }
        
      }
    ]
  },
  options:{
     scales: {
       yAxes: [{
                ticks: {
                    min:50,
                    stepSize:10,
                }
            }]
    }
  }
})
