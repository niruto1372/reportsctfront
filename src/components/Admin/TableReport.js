import React from 'react'

import { MDBDataTableV5 } from "mdbreact";
// import moment from "moment";

const TableReport = ({data}) => {






  const datatable = {
    columns: [
      {
        label: "Nombre",
        field: "NameEmployees",
      },
      {
        label: "Apellido",
        field: "LastNameEmployees",
      },
      {
        label: "Horas",
        field: "WorkedHours",
      },
      {
        label: "1",
        field: "Day01",
      },
      {
        label: "2",
        field: "Day02",
      },
      {
        label: "3",
        field: "Day03",
      },
      {
        label: "4",
        field: "Day04",
      },
      {
        label: "5",
        field: "Day05",
      },
      {
        label: "6",
        field: "Day06",
      },
      {
        label: "7",
        field: "Day07",
      },
      {
        label: "8",
        field: "Day08",
      },
      {
        label: "9",
        field: "Day09",
      },
      {
        label: "10",
        field: "Day10",
      },
      {
        label: "11",
        field: "Day11",
      },
      {
        label: "12",
        field: "Day12",
      },
      {
        label: "13",
        field: "Day13",
      },
      {
        label: "14",
        field: "Day14",
      },
      {
        label: "15",
        field: "Day15",
      },
      {
        label: "16",
        field: "Day16",
      },
      {
        label: "17",
        field: "Day17",
      },
      {
        label: "18",
        field: "Day18",
      },
      {
        label: "19",
        field: "Day19",
      },
      {
        label: "20",
        field: "Day20",
      },
      {
        label: "21",
        field: "Day21",
      },
      {
        label: "22",
        field: "Day22",
      },
      {
        label: "23",
        field: "Day23",
      },
      {
        label: "24",
        field: "Day24",
      },
      {
        label: "25",
        field: "Day25",
      },
      {
        label: "26",
        field: "Day26",
      },
      {
        label: "27",
        field: "Day27",
      },
      {
        label: "28",
        field: "Day28",
      },
      {
        label: "29",
        field: "Day029",
      },
      {
        label: "30",
        field: "Day30",
      },
      {
        label: "Capacidad Disponible (hrs)",
        field: "RemainingHours",
      },
      {
        label: "Capacidad Disponible (dias)",
        field: "RemainingDays",
      },
    ],
    rows: data.map((objData) => {
      return {
        ...objData,

      };
    }),
  };



  return (
   
      <MDBDataTableV5
        hover
        bordered
        size={"small"}
        entriesOptions={[10, 20, 25]}
        entries={10}
        pagesAmount={4}
        data={datatable}
        responsive
      />
  )
}

export default TableReport
