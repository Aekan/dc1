import Table from './Table';

export default class App {
    root: HTMLDivElement = <HTMLDivElement>document.getElementById("appRoot");
    table: Table = new Table(10, 10);

    run() {
        this.root.appendChild(this.table.getTableElement());
    }

    stop() {
        this.root.removeChild(this.table.getTableElement());
    }
}