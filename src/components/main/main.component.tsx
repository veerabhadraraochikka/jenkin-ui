import * as React from 'react';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

export interface Props {

}

export class MainComponent extends React.Component<Props, {}> {
  render(): any {
    return (
      <div className="container-fluid">
        <HeaderComponent />
        <BodyComponent></BodyComponent>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}
