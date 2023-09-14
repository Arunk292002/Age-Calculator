const BirthDateip=document.getElementById('birthdate');
const calcButton=document.getElementById('calc');
const result=document.getElementById('res');
calcButton.addEventListener('click', calcAge);
function calcAge()
{
    const birthDate=new Date(BirthDateip.value);
    const today= new Date();
    const ageinms=today-birthDate;
    const ageinYr=Math.floor(ageinms/(1000*60*60*24*365.25));
    if(ageinYr>=0)
    {
        result.textContent=`You are ${ageinYr} years old`;
    }
    else
    {
        result.textContent='Not Valid Input';
    }
}