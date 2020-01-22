import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grid, PageSettingsModel, DataStateChangeEventArgs, GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Sort } from "@syncfusion/ej2-react-grids";
import { data } from './datasource';
class App extends React.Component {
    render() {
        return <GridComponent dataSource={data} allowPaging ={true} allowSorting ={true} >
            <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='200' ></ColumnDirective>
            <ColumnDirective field='CustomerName' headerText='Customer Name' width='200'></ColumnDirective>
            <ColumnDirective field='OrderDate' headerText='Order Date' width='200' format='yMd' />
            <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2'  />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='250'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page, Sort]} />
        </GridComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));
