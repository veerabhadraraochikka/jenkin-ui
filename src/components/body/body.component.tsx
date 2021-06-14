import * as React from "react";
import { Table } from "../utils/table.component";
import { Button, Card } from 'react-bootstrap';

export interface Props { }

export class BodyComponent extends React.Component<Props, {}> {
  state: any;
  headers = ["Band", "Singer", "Inception", "Label"];
  inputRef: any = React.createRef();

  rows = [
    ["Napalm Death", "Barney Greenway", "1981", "Century Media"],
    ["Carcass", "Jeff Walker", "1985", "Earache"],
    ["Extreme Noise Terror", "Dean Jones", "1985", "Candlelight"],
    ["Discordance Axis", "Jon Chang", "1992", "Hydrahead"],
  ];

  constructor(props: any) {
    super(props);
    this.state = { value: "", refValue: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  onKeyPress(event: any): void {
    this.setState({ refValue: this.inputRef.current.value });
  }

  render() {
    return (
      <div>
        <Button variant="primary">Kalyan</Button>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: {this.state.refValue}
            <input
              type="text"
              ref={this.inputRef}
              onKeyDown={this.onKeyPress.bind(this)}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Table rows={this.rows} headers={this.headers} />
      </div>
    );
  }
}
