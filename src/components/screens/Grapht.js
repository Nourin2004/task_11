import React from "react";
import styled from "styled-components";

import {
    BarChart,
    Bar,
    // XAxis,
    // YAxis,
    // CartesianGrid,
    Tooltip,
    //   Legend
} from "recharts";

const data = [
    {
        name: "Page A",
        Female_Guest: 250,
        Male_Guest: 300,
        Total_Guest: 1300,
        amt: 2400,
    },
    {
        name: "Page B",
        Female_Guest: 200,
        Male_Guest: 250,
        Total_Guest: 3000,
        amt: 2210,
    },
    {
        name: "Page C",
        Female_Guest: 250,
        Male_Guest: 300,
        Total_Guest: 3500,
        amt: 2290,
    },
    {
        name: "Page D",
        Female_Guest: 250,
        Male_Guest: 300,
        Total_Guest: 4200,
        amt: 2000,
    },
    {
        name: "Page E",
        Female_Guest: 250,
        Male_Guest: 310,
        Total_Guest: 1500,
        amt: 2181,
    },
    {
        name: "Page F",
        Female_Guest: 240,
        Male_Guest: 320,
        Total_Guest: 2400,
        amt: 2500,
    },
];

export default function Grapht() {
    return (
        <>
            <GraphContainer>
                <BarChartBox>
                    <GraphHead>
                        <GuestTop>
                            <TotalDiv>
                                <Tbox></Tbox>
                                <Gh4>Total guest</Gh4>
                            </TotalDiv>
                            <TotalDiv>
                                <Mbox></Mbox>
                                <Gh4>Male guest</Gh4>
                            </TotalDiv>
                            <TotalDiv>
                                <Fbox></Fbox>
                                <Gh4>Female guest</Gh4>
                            </TotalDiv>
                        </GuestTop>
                        <Slide>
                            <Limg src={require("../../Assets/eva_arrow-ios-back-fill.svg").default} />
                            <Limg src={require("../../Assets/eva_arrow-ios-back-fill-1.svg").default} />
                        </Slide>
                    </GraphHead>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        {/* <XAxis dataKey="name" /> */}
                        {/* <YAxis /> */}
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="Male_Guest" stackId="a" fill="#A5E3E3" />
                        <Bar dataKey="Female_Guest" stackId="a" fill="#D2A2F7" />
                        <Bar dataKey="Total_Guest" stackId="a" fill="#000" />
                    </BarChart>
                </BarChartBox>
            </GraphContainer>
        </>
    );
}

const GraphContainer = styled.section`
    width: 98%;
    margin-top: 35px;
    background-color: #fff;
    border-radius: 20px;
    text-align: center;
    @media all and (max-width: 1440px) {
        width: 138%;
    }
    @media all and (max-width: 1050px) {
        width: 145%;
    }
    @media all and (max-width: 980px) {
        width: 198%;
    }
    @media all and (max-width: 360px) {
        display: none;
    }
`;

const BarChartBox = styled.section`
    width: 84%;
    margin: 0 auto;
    @media all and (max-width: 980px) {
        width: 92%;
    }
    @media all and (max-width: 640px) {
        overflow: auto;
    }
`;

const GraphHead = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
`;
const GuestTop = styled.section`
    display: flex;
    align-items: center;
`;
const TotalDiv = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    &:last-child {
        margin-right: 0;
    }
`;
const Tbox = styled.span`
    background-color: #000;
    border-radius: 10px;
    padding: 10px;
    display: inline-block;
    margin-right: 5px;
`;
const Gh4 = styled.h4``;

const Mbox = styled.span`
    background-color: #a5e3e3;
    border-radius: 10px;
    padding: 10px;
    display: inline-block;
    margin-right: 5px;
`;

const Fbox = styled.span`
    background-color: #d2a2f7;
    border-radius: 10px;
    padding: 10px;
    display: inline-block;
    margin-right: 5px;
`;

const Slide = styled.div``;
const Limg = styled.img``;
