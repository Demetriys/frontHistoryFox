export default function CalcInput({initialNumber, changeNumber}) {
    return  <input type='number' placeholder='0' onChange={event => {changeNumber(event.target.value)}}/>;

}