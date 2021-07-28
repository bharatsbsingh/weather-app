// api key:08178f17ad3eb024beba5a661241bf1c
// e9166e1c3c427b26d15e8e6704947ccf
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const Msg = document.getElementById('city_name');
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const dataHide = document.querySelector(".middle_layer");

// alert('connected')

// alert(cityName.value)

 /***   handling day nd date *******/
            const Week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
            let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
            var d = new Date();
            let currDay = d.getDay();
            let currDate = d.getDate();
            let currMonth = d.getMonth();
            let day = document.getElementById('day');
            day.innerText = `${Week[currDay]}`;
            let today_date = document.getElementById('today_date');
            today_date.innerText = `${currDate}   ${month[currMonth]}`
            /***End of handling Date */

const getInfo = async(e)=>{
    e.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === "")
    {
        Msg.style.color = 'red';
        Msg.innerText = "please ,write valid city name !!!!";
        // alert('Write valid city name');
        dataHide.classList.add('data_hide'); 
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=08178f17ad3eb024beba5a661241bf1c`;
            const response = await fetch(url);



            /**Handling form Values */


            // converting json data to object
            const data = await response.json();
            const arrData = [data];

            // setting up values in form fields
            Msg.style.color = 'rgb(108, 181, 199)';
            let t = arrData[0].main.temp - 273
            let finalTemp = t.toPrecision(3);
            temp.innerHTML = `<p id="temp" class="temperature" style='text-align: center;'> <span>${finalTemp}</span><sup>0</sup>c </p>`;
            Msg.innerText = ` ${cityVal} ,${arrData[0].sys.country}`;
            
            // setting up icons of weather:
            let tempMood = arrData[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML = 
                "<i class = 'fas fa-sun' style = 'color: #FFFF00 ;'></i> ";
            }
            else if(tempMood == "Clouds"){
                temp_status.innerHTML = 
                "<i class = 'fas fa-cloud ' style = 'color: #F1f2f6 ;'></i> ";
            }
               else if(tempMood == "Rain"){
                temp_status.innerHTML = 
                "<i class = 'fas fa-cloud-rain ' style = 'color: #0000FF ;'></i>  ";
            }
             else{
                temp_status.innerHTML = 
                "<i class = 'fas fa-cloud ' style = 'color: #F1f2f6 ;'></i> ";
            }

            //Adding Data hiding class 
            dataHide.classList.remove('data_hide');

            /*** End of handlig Form VAlue*/

        }catch{
            Msg.style.color = 'red';
            Msg.innerText = "please ,write valid city name !!!!";
            dataHide.classList.add('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click' , getInfo);

