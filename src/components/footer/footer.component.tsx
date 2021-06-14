import * as React from 'react';

export interface Props {

}

export class FooterComponent extends React.Component<Props, {}> {

  state: any;

  constructor(props: any) {
    super(props);
    this.state = {value: ''};
  }

  render(): any {
    return (
      <footer>i am footer</footer>
    );
  }
}