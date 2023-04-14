import React, { useState } from "react";
import styled from 'styled-components';

const DayInfoEl = styled.div`
  font-size: 20px;
  display: flex;
  height: 75vh;
  overflow: auto;
  padding: 0;
  margin: 0;
`

const TableDay = styled.table`
  padding: 0;
  margin: 0;
`

const TableTr = styled.tr`
  margin: 0px;
  padding: 0px;
  border-spacing: 0;
`

const TableTd = styled.td`
  width: 100vw;
  height: 50px;
  margin: 0px;
  border: 2px solid rgb(219, 219, 219);
  border-left: 0;
  border-top: 0;
  &:hover {
    cursor: pointer;
    background-color: #cecef1;
  }
  &:active {
    color: red;
  }
  padding: 0;
  margin: 0;
`

const Li = styled.p`
  padding: 0;
  margin: 0;
  color: #9b9a9a;
  position: relative;
  top: -12px
`

const TimeTr = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #dbdbdb;
`

const Dayinfo = styled.p`
  color: red;
  padding: 20px;
`
const DayinfoDelete = styled.button`
  color: red;
  padding: 20px;
  border: 0;
  background-color: rgba(0,0,0,0);
  &:hover {
    cursor: pointer;
  }
  &:active {
    color: red;
  }
`
export default function DayInfo(){
  const [selected, select] = useState();

  const time = ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00", "10:00",
                "11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00", 
                "22:00", "23:00"];
  const day = [25, 26, 27, 28, 29, 30, 31];

  const AddMark = (time, data) => {
    let el = document.getElementById(time + data);
    el.style.backgroundColor = "#cecef1";
    select([time,data]);
  }

  const Delete = () => {
    let el = document.getElementById(selected[0] + selected[1]);
    console.log(selected[1], selected[0]);
    console.log(el);
    if(el){
      el.style.backgroundColor = "rgba(0,0,0,0)";
      select(null);
    }
  }


  return(
    <>
      <DayInfoEl>
        <TableDay>
        {time.map((timeEl, index) => {
              return (
                <TimeTr>
                <Li>{timeEl}</Li>
                <TableTr>
                  {day.map((dayEl) => {
                    return(
                      <TableTd id={timeEl + dayEl} onClick={() => {AddMark(timeEl, dayEl)}}></TableTd>
                    )
                  })}
                </TableTr>
                </TimeTr>
              )
            })}
        </TableDay>
      </DayInfoEl>
      <Info>
        <Dayinfo>Today</Dayinfo>
        { selected != null? <DayinfoDelete onClick={() => Delete()}>Delete</DayinfoDelete> : null }
      </Info>
    </>

  )
}