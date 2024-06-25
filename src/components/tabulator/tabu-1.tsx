import 'react-tabulator/css/tabulator.min.css';
import { ReactTabulator, ColumnDefinition } from 'react-tabulator'

const columns: ColumnDefinition[] = [
    { title: "Name", field: "name", width: 150,headerSort:true, resizable:false,editable:true },
    { title: "Color", field: "color", width: 150, formatter: 'color',sorter:"string" ,headerSort:false},
    { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
    { title: "Favourite Color", field: "col" },
    { title: "Date Of Birth", field: "dob", hozAlign: "center" },
    { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
    { title: "Passed?", field: "passed", hozAlign: "center", formatter: "tickCross" }
];

var data = [
    { id: 1, color: 'purple', name: "Oli Bob", age: "12", col: "red", dob: "" },
    { id: 2,color: 'red', name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
    { id: 3,color: 'blue', name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
    { id: 4, color: 'orange',name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
    { id: 5, color: 'magenta',name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
];


export function Tabulator1() {
    return (
        <ReactTabulator
            data={data}
            columns={columns}
            options={{
                resizableColumnFit:true,
            }}
        // layout={"fitData"}
        />
    )
}