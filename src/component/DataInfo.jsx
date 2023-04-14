import React from "react";
import styled from 'styled-components';

const DataInfoEl = styled.div`
  height: 10vh;
  font-size: 20px;
  background-color: #dbdbdb;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
`

const Data = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-spacing: 0;
`
const Day = styled.p`
 font-size: 15px;
 text-align: center;
 padding: 0;
 margin: 0;
 padding-bottom: 10px;
 font-weight: bold;
`

const Li = styled.li`
  width: 100vw;
  border-spacing: 0;
`

const Month = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding:  0 30px 0 30px;
  margim: 0;
`
const Text = styled.p`
  padding: 0px;
  margin: 0px;
`

const ButtonSwipe = styled.button`
  border: 0px;
  font-weight: bold;
  font-family: Andale Mono, monospace;
  font-size: 25px;
  color: red;
  background-color: #00000000;
  &:hover {
    cursor: pointer;
    color: palevioletred;
  }
  &:active {
    color: red;
  }
`

const NowData = styled.p`
  background-color: red;
  margin: 0;
  color: white;
  padding: 5px;
  border-radius: 100px;
`

const NoNowData = styled.p`
  margin: 0;
  padding: 5px;
`

export default function DataInfo(){

    return(
        <DataInfoEl>
            <Data>
                <Li><Day>M</Day><NoNowData>25</NoNowData></Li>
                <Li><Day>T</Day><NoNowData>26</NoNowData></Li>
                <Li><Day>W</Day><NoNowData>27</NoNowData></Li>
                <Li><Day>T</Day><NoNowData>28</NoNowData></Li>
                <Li><Day>F</Day><NowData>29</NowData></Li>
                <Li><Day>S</Day><NoNowData>30</NoNowData></Li>
                <Li><Day>S</Day><NoNowData>31</NoNowData></Li>
            </Data>
            <Month>
                <ButtonSwipe>&lt;</ButtonSwipe>
                <Text>March 2019</Text>
                <ButtonSwipe>&gt;</ButtonSwipe>
            </Month>
        </DataInfoEl>
    )
}