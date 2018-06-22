import { DHXView } from 'dhx-optimus';
var about = require('./about-template.html');

export class AboutView extends DHXView {
  render() {
    this.ui = this.root.attachHTMLString(about({
      name: 'DHTMLX Optimus starter',
      author: 'Stanislaw Wolski',
      version: '0.x',
      author1: 'Remi Kristelijn',
      version1: '1.x',
      version2: '1.1'
    }
    ));
  }
}
