import * as React from 'react';

export interface PropModel {
  headers: any;
}

export interface StateModel {
  headers: any;
  rows: any;
  name?: any
}

export class Table extends React.PureComponent<PropModel, StateModel> {

  constructor(props: any) {
    super(props);
    this.state = {
      headers: this.createTableHeader(props.headers),
      rows: this.createTableRow(props.rows)
    }
  }

  createTableHeader(headers: any): any {
    return headers.map((header: string, index: number) =>
      <th scope="col" key={index}>{header}</th>
    );
  }

  createTableRow(rows: any): any {
    return rows.map((row: any, rIndex: number) =>
      <tr key={rIndex}>
        {row.map((cell: string, cIndex: number) =>
          <td key={cIndex}>{cell}</td>
        )}
      </tr>
    )
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              {this.state.headers}
            </tr>
          </thead>
          <tbody>
            {this.state.rows}
          </tbody>
        </table>
      </div>
    );
  }
}